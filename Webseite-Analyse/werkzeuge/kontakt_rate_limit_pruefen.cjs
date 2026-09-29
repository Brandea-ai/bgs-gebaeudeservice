// Fake-Clock-Prüfung ohne Server oder Netzwerk. Liest den tatsächlichen Rate-Limiter.
// Aufruf: node kontakt_rate_limit_pruefen.cjs [REPO_PFAD] [AUSGABEORDNER]
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert/strict');
const os = require('node:os');
const REPO = path.resolve(process.argv[2] || path.join(__dirname, '../..'));
const OUT = process.argv[3] ? path.resolve(process.argv[3]) : fs.mkdtempSync(path.join(os.tmpdir(), 'bgs-kontakt-limit-'));
fs.mkdirSync(OUT, { recursive: true });
const ts = require(path.join(REPO, 'node_modules/typescript'));
const file = path.join(REPO, 'app/api/contact/route.ts');
const source = fs.readFileSync(file, 'utf8');
const segment = source.slice(source.indexOf('const RATE_WINDOW_MS'), source.indexOf('\nfunction fail('));
assert.ok(segment.includes('function isRateLimited'));
const compiled = ts.transpileModule(segment, { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS } }).outputText;
function fixture() {
 let now = 0, nextId = 0;
 const timers = new Map();
 const context = vm.createContext({
  Date: { now: () => now },
  setTimeout: (fn, delay) => {
   const timer = { id: ++nextId, at: now + delay, fn, unreferenced: false, unref() { this.unreferenced = true; } };
   timers.set(timer.id, timer);
   return timer;
  },
 });
 vm.runInContext(compiled + '\nglobalThis.subject = { request: isRateLimited, snapshot: () => [...recentRequests].map(([ip, times]) => ({ip, times: [...times]})), window: RATE_WINDOW_MS, max: RATE_MAX_REQUESTS, capacity: RATE_MAX_CLIENTS };', context);
 return {
  ...context.subject,
  entries: () => JSON.parse(JSON.stringify(context.subject.snapshot())),
  pending: () => [...timers.values()],
  advance(ms, fire = true) {
   now += ms;
   if (fire) {
    let due;
    while ((due = [...timers.values()].find(timer => timer.at <= now))) {
     timers.delete(due.id);
     due.fn();
    }
   }
  },
 };
}
const tests = [];
function test(name, run) { try { tests.push({name, pass:true, evidence:run()}); } catch(error) { tests.push({name,pass:false,error:error.message}); } }
test('five accepted requests; rejected burst cannot grow storage or extend TTL', () => {
 const f = fixture();
 for(let n=0;n<f.max;n++) assert.equal(f.request('192.0.2.1'), false);
 for(let n=0;n<1000;n++) assert.equal(f.request('192.0.2.1'), true);
 assert.equal(f.entries()[0].times.length, f.max);
 assert.equal(f.pending().length, 1);
 assert.equal(f.pending()[0].unreferenced, true);
 f.advance(f.window - 1);
 assert.equal(f.request('192.0.2.1'), true);
 f.advance(1);
 assert.equal(f.entries().length, 0);
 assert.equal(f.pending().length, 0);
 return {accepted:f.max, rejected:1001, retainedAtExpiry:0};
});
test('idle client expires without another HTTP request', () => {
 const f = fixture();
 assert.equal(f.request('192.0.2.2'), false);
 f.advance(f.window - 1);
 assert.equal(f.entries().length, 1);
 f.advance(1);
 assert.equal(f.entries().length, 0);
 return {expiryMs:f.window};
});
test('sliding window still allows a request when older timestamps expire', () => {
 const f = fixture();
 for(let n=0;n<4;n++) assert.equal(f.request('192.0.2.3'), false);
 f.advance(f.window / 2);
 assert.equal(f.request('192.0.2.3'), false);
 assert.equal(f.request('192.0.2.3'), true);
 f.advance(f.window / 2);
 assert.equal(f.request('192.0.2.3'), false);
 assert.equal(f.entries()[0].times.length, 2);
 return {activeTimestamps:2};
});
test('request after suspended timer removes unrelated expired clients', () => {
 const f = fixture();
 assert.equal(f.request('192.0.2.4'), false);
 f.advance(24*60*60*1000, false);
 assert.equal(f.request('192.0.2.5'), false);
 assert.deepEqual(f.entries().map(entry => entry.ip), ['192.0.2.5']);
 return {remainingClient:'192.0.2.5'};
});
test('client cap bounds storage, preserves existing limits, then recovers after expiry', () => {
 const f = fixture();
 for(let n=0;n<f.capacity;n++) assert.equal(f.request(`synthetic-${n}`), false);
 assert.equal(f.request('over-cap'), true);
 assert.equal(f.entries().length, f.capacity);
 assert.equal(f.request('synthetic-0'), false);
 assert.equal(f.pending().length, 1);
 f.advance(f.window, false);
 assert.equal(f.request('after-expiry'), false);
 assert.equal(f.entries().length, 1);
 return {capacity:f.capacity, retainedAfterExpiry:1};
});
fs.writeFileSync(path.join(OUT, 'rate-limit-results.json'), JSON.stringify({source:file, tests}, null, 2));
console.log(JSON.stringify({output:OUT, tests:tests.length, passed:tests.filter(test=>test.pass).length, failed:tests.filter(test=>!test.pass)},null,2));
if(tests.some(test=>!test.pass)) process.exitCode=1;
