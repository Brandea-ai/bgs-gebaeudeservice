// Prüft alle Seiten der Sitemap im Browser: Konsolenfehler und Verstösse gegen
// die Content-Security-Policy (M33), dazu Karte auf /kontakt und Leistungsmenü.
// Aufruf: node Webseite-Analyse/werkzeuge/browser_pruefen.cjs [BASIS-URL]
// Braucht Playwright (`npx playwright install chromium`). Entspricht N062 und N073.
const { chromium } = require('playwright');

const BASE = (process.argv[2] || 'http://localhost:3000').replace(/\/$/, '');

(async () => {
  const sm = await (await fetch(BASE + '/sitemap.xml')).text();
  const paths = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 1280, height: 900 } });
  await ctx.addInitScript(() => {
    window.__csp = [];
    document.addEventListener('securitypolicyviolation', (e) => window.__csp.push(e.violatedDirective + ' ' + e.blockedURI));
  });
  const p = await ctx.newPage();
  const errs = [];
  const assets = new Set();
  p.on('console', (m) => { if (m.type() === 'error') errs.push(m.text().slice(0, 160)); });
  p.on('pageerror', (e) => errs.push(String(e).slice(0, 160)));
  let viol = [];
  for (const path of paths) {
    await p.goto(BASE + path, { waitUntil: 'networkidle' });
    const links = await p.locator('link[rel="icon"], link[rel="apple-touch-icon"], link[rel="manifest"]').evaluateAll(nodes => nodes.map(node => node.href));
    for (const href of links) {
      if (assets.has(href)) continue;
      assets.add(href);
      const response = await p.request.get(href);
      if (!response.ok()) errs.push(`Kopfdatei HTTP ${response.status()}: ${href}`);
    }
    viol = viol.concat((await p.evaluate(() => window.__csp)).map((v) => path + ': ' + v));
  }
  await p.goto(BASE + '/kontakt', { waitUntil: 'networkidle' });
  const btn = p.getByRole('button', { name: /Karte/ });
  if (await btn.count()) { await btn.first().click(); await p.waitForTimeout(2500); }
  const karte = await p.locator('iframe[src*="google.com/maps"]').count();
  viol = viol.concat((await p.evaluate(() => window.__csp)).map((v) => 'kontakt (Karte): ' + v));
  await p.goto(BASE + '/', { waitUntil: 'networkidle' });
  await p.getByRole('button', { name: 'Leistungen', exact: true }).click();
  const menu = await p.locator('#leistungen-menu').isVisible();
  // Die Menübilder vor dem Schliessen ausladen (lokaler Next15-Bug96538).
  await p.waitForLoadState('networkidle');
  await b.close();
  console.log('Seiten:', paths.length, '| CSP-Verstösse:', viol.length, '| Konsolenfehler:', errs.length, '| Karte:', karte, '| Menü:', menu, '| Kopfdateien:', assets.size);
  for (const x of viol.concat(errs)) console.log('  ', x);
  process.exit(viol.length || errs.length || !menu ? 1 : 0);
})();
