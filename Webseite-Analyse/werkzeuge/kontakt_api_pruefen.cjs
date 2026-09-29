// Lokaler API-Regressionslauf. Keine echten Zugangsdaten oder Empfänger.
// Aufruf: node kontakt_api_pruefen.cjs [GEBAUTER_REPO_PFAD] [PORT_ODER_0] [AUSGABEORDNER]
const fs = require('node:fs');
const http = require('node:http');
const net = require('node:net');
const os = require('node:os');
const path = require('node:path');
const { once } = require('node:events');
const { spawn } = require('node:child_process');

const REPO = path.resolve(process.argv[2] || path.join(__dirname, '../..'));
const requestedPort = Number(process.argv[3] || 0);
if (!Number.isInteger(requestedPort) || requestedPort < 0 || requestedPort > 65535) throw new Error('Ungültiger lokaler Port');
const OUT = process.argv[4] ? path.resolve(process.argv[4]) : fs.mkdtempSync(path.join(os.tmpdir(), 'bgs-kontakt-api-'));
fs.mkdirSync(OUT, { recursive: true });
const requests = [], tests = [];
let mode = 'valid', child, base;
const logs = fs.createWriteStream(path.join(OUT, 'contact-server.log'));
const mock = http.createServer(async (req, res) => {
  let text = '';
  for await (const chunk of req) text += chunk;
  requests.push({ mode, path: req.url, body: JSON.parse(text) });
  res.setHeader('content-type', 'application/json');
  if (mode === 'provider-error') {
    res.statusCode = 401;
    res.end(JSON.stringify({ name: 'validation_error', message: 'Synthetic provider rejection', statusCode: 401 }));
    return;
  }
  const replies = { 'missing-id': {}, 'null-data': null, 'blank-id': { id: '  ' }, 'numeric-id': { id: 42 } };
  res.end(JSON.stringify(mode in replies ? replies[mode] : { id: `local-synthetic-${requests.length}` }));
});
const valid = {
  name: 'Audit <em>Test</em>', email: 'audit@example.invalid', phone: '', role: 'Unternehmen', size: '120 m²',
  service: 'Büroreinigung', location: 'Testort', frequency: '', language: 'de',
  message: 'Synthetic local test <script>alert(1)</script>', acceptPrivacy: true, website: '',
};
async function run(name, body, expectedStatus, expectedProviderCalls, options = {}) {
  mode = options.mode || 'valid';
  const before = requests.length;
  const response = await fetch(base + '/api/contact', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-forwarded-for': options.ip || `192.0.2.${tests.length + 1}` },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  });
  const result = await response.json();
  const calls = requests.length - before;
  tests.push({ name, status: response.status, expectedStatus, providerCalls: calls, expectedProviderCalls, result, pass: response.status === expectedStatus && calls === expectedProviderCalls });
}
async function availablePort() {
  // Ein belegter Wunschport bricht ab. An einen fremden lokalen Server wird nie gepostet.
  const probe = net.createServer();
  probe.listen(requestedPort, '127.0.0.1');
  await once(probe, 'listening');
  const port = probe.address().port;
  await new Promise(resolve => probe.close(resolve));
  return port;
}
function waitForOwnServer(server) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error('Eigener Next-Server wurde nicht bereit')), 30000);
    server.once('error', error => { clearTimeout(timeout); reject(error); });
    server.once('exit', code => { clearTimeout(timeout); reject(new Error(`Eigener Next-Server beendet: ${code}`)); });
    // Nur das Ready-Signal des soeben gestarteten Prozesses gilt, kein HTTP-Aufruf
    // auf einem möglicherweise schon von einem anderen Prozess benutzten Port.
    server.stdout.on('data', data => {
      if (data.toString().includes('Ready in')) { clearTimeout(timeout); resolve(); }
    });
  });
}
(async () => {
  const port = await availablePort();
  base = `http://127.0.0.1:${port}`;
  mock.listen(0, '127.0.0.1');
  await once(mock, 'listening');
  const mockUrl = `http://127.0.0.1:${mock.address().port}`;
  child = spawn(process.execPath, [path.join(REPO, 'node_modules/next/dist/bin/next'), 'start', '-p', String(port)], {
    cwd: REPO,
    env: {
      ...process.env,
      RESEND_API_KEY: 're_local_synthetic_test_only', RESEND_BASE_URL: mockUrl,
      CONTACT_TO_EMAIL: 'inbox@example.invalid', CONTACT_FROM_EMAIL: 'Audit <sender@example.invalid>',
    },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  child.stdout.pipe(logs); child.stderr.pipe(logs);
  await waitForOwnServer(child);
  await run('invalid-json', '{invalid', 400, 0);
  await run('required-fields', {}, 400, 0);
  await run('invalid-role', { ...valid, role: 'Unbekannt' }, 400, 0);
  await run('privacy-required', { ...valid, acceptPrivacy: false }, 400, 0);
  await run('invalid-email', { ...valid, email: 'invalid' }, 400, 0);
  await run('oversize-message', { ...valid, message: 'a'.repeat(5001) }, 400, 0);
  await run('honeypot', { ...valid, website: 'spam.example.invalid' }, 200, 0);
  await run('valid-request', valid, 200, 1);
  const sent = requests.at(-1).body;
  tests.push({ name: 'html-escaped', pass: !sent.html.includes('<script>') && sent.html.includes('&lt;script&gt;') && !sent.html.includes('<em>Test</em>') && sent.reply_to === 'audit@example.invalid', replyTo: sent.reply_to });
  const radii = [...sent.html.matchAll(/border-radius:\s*([^;]+)/g)].flatMap(match => match[1].match(/\d+/g)).map(Number);
  tests.push({ name: 'mail-style-rules', pass: !/[\u2013\u2014]/u.test(sent.html) && !sent.html.includes('border-left') && radii.length > 0 && radii.every(value => value === 0 || value === 3) });
  fs.writeFileSync(path.join(OUT, 'contact-email-preview.html'), sent.html);
  await run('provider-error', valid, 503, 1, { mode: 'provider-error' });
  await run('provider-missing-id', valid, 503, 1, { mode: 'missing-id' });
  await run('provider-null-data', valid, 503, 1, { mode: 'null-data' });
  await run('provider-blank-id', valid, 503, 1, { mode: 'blank-id' });
  await run('provider-numeric-id', valid, 503, 1, { mode: 'numeric-id' });
  for (let i = 1; i <= 6; i++) await run(`rate-limit-${i}`, valid, i < 6 ? 200 : 429, i < 6 ? 1 : 0, { ip: '198.51.100.50' });
  fs.writeFileSync(path.join(OUT, 'contact-results.json'), JSON.stringify({ base, mock: mockUrl, timestamp: new Date().toISOString(), tests, providerRequests: requests }, null, 2));
  const failed = tests.filter(test => !test.pass);
  console.log(JSON.stringify({ output: OUT, tests: tests.length, passed: tests.length - failed.length, failed }, null, 2));
  if (failed.length) process.exitCode = 1;
})().catch(error => { console.error(error); process.exitCode = 1; }).finally(async () => {
  if (child && child.exitCode === null && child.signalCode === null) {
    const stopped = once(child, 'exit');
    child.kill('SIGTERM');
    await stopped;
  }
  if (mock.listening) await new Promise(resolve => mock.close(resolve));
  logs.end();
});
