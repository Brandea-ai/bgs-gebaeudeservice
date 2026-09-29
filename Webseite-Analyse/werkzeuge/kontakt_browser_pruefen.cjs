// Browser-Regressionslauf gegen einen vorhandenen lokalen Server. Formular- und Google-Aufrufe werden abgefangen.
// Aufruf: NODE_PATH=<Playwright-Ordner> node kontakt_browser_pruefen.cjs http://127.0.0.1:PORT [AUSGABEORDNER]
const fs = require('fs');
const path = require('path');
const assert = require('assert/strict');
const { chromium } = require('playwright');
const BASE = process.argv[2] || 'http://127.0.0.1:3332';
if (!/^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(BASE)) throw new Error('Local server required');
const os = require('node:os');
const OUT = process.argv[3] ? path.resolve(process.argv[3]) : fs.mkdtempSync(path.join(os.tmpdir(), 'bgs-kontakt-browser-'));
fs.mkdirSync(OUT, { recursive: true });
const langs = { de: '/kontakt', en: '/en/contact', fr: '/fr/contact', it: '/it/contatto' };
const tests = [];
async function test(name, fn) {
  try { const evidence = await fn(); tests.push({ name, pass: true, evidence }); }
  catch (error) { tests.push({ name, pass: false, error: error.message }); }
}
(async () => {
 const browser = await chromium.launch();
 try {
  for (const [lang, contactPath] of Object.entries(langs)) {
   const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
   const pageErrors = [];
   page.on('pageerror', error => pageErrors.push(error.message));
   let payload, requestCount = 0, responseMode = 'success';
   await page.route('**/api/contact', async route => {
    requestCount++;
    payload = route.request().postDataJSON();
    await route.fulfill({ status: responseMode === 'success' ? 200 : 503, contentType: 'application/json', body: JSON.stringify(responseMode === 'success' ? { success: true } : { success: false, message: 'Lokaler synthetischer Fehler' }) });
   });
   await test(`${lang}: required fields and first-error focus`, async () => {
    await page.goto(BASE + contactPath, { waitUntil: 'networkidle' });
    await page.locator('form button[type=submit]').click();
    assert.equal(requestCount, 0);
    assert.equal(await page.locator('[name=role]').first().getAttribute('aria-invalid'), 'true');
    assert.equal(await page.evaluate(() => document.activeElement.name), 'role');
   });
   await test(`${lang}: selection updates one-off and premium examples`, async () => {
    await page.locator('#service').selectOption('Umzugsreinigung');
    assert.equal(await page.locator('#frequency').count(), 0);
    assert.equal(await page.locator('#location').count(), 1);
    const size = await page.locator('#size').getAttribute('placeholder');
    assert.ok(size.includes('4') && size.includes('80'));
    await page.locator('#service').selectOption('Yacht-Reinigung');
    assert.equal(await page.locator('#frequency').count(), 1);
    assert.match(await page.locator('#size').getAttribute('placeholder'), /14/);
    await page.locator('#frequency').selectOption('Wöchentlich');
    await page.locator('#service').selectOption('Baureinigung');
    assert.equal(await page.locator('#frequency').count(), 0);
    await page.locator('#service').selectOption('Unterhaltsreinigung');
    assert.equal(await page.locator('#frequency').inputValue(), '');
   });
   await test(`${lang}: one-off mocked submit and success focus`, async () => {
    await page.locator('#service').selectOption('Umzugsreinigung');
    await page.locator('[name=role][value=Unternehmen]').check();
    await page.locator('#message').fill('Synthetische lokale Anfrage, Übergabe am 30. November.');
    await page.locator('#size').fill('4 Wohnungen mit je 80 m²');
    await page.locator('#location').fill('Testort');
    await page.locator('#name').fill('Audit Test');
    await page.locator('#email').fill('audit@example.invalid');
    await page.locator('[name=acceptPrivacy]').check();
    await page.locator('form button[type=submit]').click();
    await page.locator('#kontakt-formular [role=status]').waitFor();
    assert.equal(requestCount, 1);
    assert.equal(payload.language, lang);
    assert.equal(payload.service, 'Umzugsreinigung');
    assert.equal(payload.role, 'Unternehmen');
    assert.equal(payload.size, '4 Wohnungen mit je 80 m²');
    assert.equal(payload.frequency, '');
    await page.waitForFunction(() => document.activeElement.getAttribute('role') === 'status');
    assert.equal(await page.evaluate(() => document.activeElement.getAttribute('role')), 'status');
    return { language: payload.language, service: payload.service, frequency: payload.frequency };
   });
   await test(`${lang}: premium contact wording and examples`, async () => {
    await page.goto(BASE + (lang === 'de' ? '' : '/' + lang) + '/premium/yacht', { waitUntil: 'networkidle' });
    const text = await page.locator('#kontakt-formular').innerText();
    assert.match(await page.locator('#size').getAttribute('placeholder'), /14/);
    assert.equal((text.match(/\b24\b/g) || []).length, 1);
    assert.ok(!text.includes('Wir besichtigen das Objekt vor Ort, kostenlos.'));
   });
   if (lang === 'de') {
    await test('provider error stays editable and is focused', async () => {
     responseMode = 'error';
     await page.goto(BASE + contactPath, { waitUntil: 'networkidle' });
     await page.locator('[name=role][value=Unternehmen]').check();
     await page.locator('#message').fill('Synthetische Anfrage');
     await page.locator('#name').fill('Audit Test');
     await page.locator('#email').fill('audit@example.invalid');
     await page.locator('[name=acceptPrivacy]').check();
     await page.locator('form button[type=submit]').click();
     await page.locator('#kontakt-formular [role=alert]').waitFor();
     assert.equal(await page.locator('#name').inputValue(), 'Audit Test');
     await page.waitForFunction(() => document.activeElement.getAttribute('role') === 'alert');
     assert.equal(await page.evaluate(() => document.activeElement.getAttribute('role')), 'alert');
    });
   }
   await test(`${lang}: footer mobile keyboard and desktop links`, async () => {
    await page.setViewportSize({ width: 390, height: 844 });
    const summaries = page.locator('footer details > summary');
    assert.equal(await summaries.count(), 4);
    assert.equal(await page.locator('footer details[open]').count(), 0);
    await summaries.first().focus();
    await page.keyboard.press('Enter');
    await page.locator('footer details[open]').waitFor();
    assert.equal(await page.locator('footer details').first().locator('a:visible').count(), 7);
    await page.keyboard.press('Enter');
    await page.waitForFunction(() => document.querySelectorAll('footer details[open]').length === 0);
    assert.equal(await page.locator('footer details[open]').count(), 0);
    await page.locator('footer').scrollIntoViewIfNeeded();
    await page.waitForFunction(() => document.querySelector('#mobil-cta').getAttribute('aria-hidden') === 'true');
    const height = await page.locator('footer').evaluate(el => el.getBoundingClientRect().height);
    await page.setViewportSize({ width: 1440, height: 900 });
    assert.equal(await page.locator('footer summary:visible').count(), 0);
    assert.equal(await page.locator('footer a:visible').count(), 27);
    return { mobileFooterHeight: height };
   });
   await test(`${lang}: no runtime errors`, () => assert.deepEqual(pageErrors, []));
   await page.close();
  }
  await test('sticky contact channels remain inside their row', async () => {
   const page = await browser.newPage();
   const measurements = [];
   for (const width of [1024, 1100, 1279, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ['/leistungen/unterhaltsreinigung', '/premium/yacht', '/kontakt']) {
     await page.goto(BASE + route, { waitUntil: 'networkidle' });
     const measured = await page.evaluate(async () => {
      const section = document.querySelector('#kontakt-formular');
      const grid = section.firstElementChild;
      const left = grid.children[2].firstElementChild;
      const next = grid.children[3];
      const start = section.getBoundingClientRect().top + scrollY;
      const finish = start + section.getBoundingClientRect().height;
      let minGap = Infinity;
      for (let y = start - 100; y < finish + 100; y += 160) {
       scrollTo({ top: y, behavior: 'instant' });
       await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
       const boundary = (next || section).getBoundingClientRect();
       const bottom = left.getBoundingClientRect().bottom;
       minGap = Math.min(minGap, (next ? boundary.top : boundary.bottom) - bottom);
      }
      return { minGap };
     });
     assert.ok(measured.minGap >= 24, `${width} ${route}: ${measured.minGap}px`);
     measurements.push({ width, route, ...measured });
    }
   }
   await page.close();
   return measurements;
  });
  await test('both maps wait for user activation', async () => {
   const page = await browser.newPage();
   let googleRequests = 0;
   await page.route(/https:\/\/[^/]*google\.[^/]+\//, async route => { googleRequests++; await route.fulfill({ contentType: 'text/html', body: '<html><title>Local mock map</title></html>' }); });
   for (const route of ['/kontakt', '/einzugsgebiet']) {
    const previous = googleRequests;
    await page.goto(BASE + route, { waitUntil: 'networkidle' });
    assert.equal(googleRequests, previous);
    assert.equal(await page.locator('iframe[src*="google"]').count(), 0);
    const mapRequest = page.waitForRequest(/https:\/\/[^/]*google\.[^/]+\//);
    await page.getByRole('button', { name: 'Karte laden', exact: true }).click();
    await mapRequest;
    await page.locator('iframe[src*="google"]').waitFor();
    await page.waitForFunction(() => document.querySelector('iframe')?.contentWindow != null);
    assert.equal(googleRequests, previous + 1);
   }
   await page.close();
   return { interceptedGoogleRequests: googleRequests };
  });
 } finally { await browser.close(); }
 fs.writeFileSync(path.join(OUT, 'contact-ui-results.json'), JSON.stringify({ timestamp: new Date().toISOString(), base: BASE, tests }, null, 2));
 const failed = tests.filter(test => !test.pass);
 console.log(JSON.stringify({ output: OUT, tests: tests.length, passed: tests.length - failed.length, failed }, null, 2));
 if (failed.length) process.exitCode = 1;
})().catch(error => { console.error(error); process.exitCode = 1; });
