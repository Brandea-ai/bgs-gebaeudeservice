// Prüft alle Sitemap-Seiten bei 1440 und 390 px mit axe WCAG 2.2 AA und Best Practice.
// Aufruf: NODE_PATH=<playwright-node_modules> node axe_bestpractice_pruefen.cjs URL AXE-PFAD [AUSGABEORDNER]
// Kein Build, kein Formularversand. Exit 1 bei Verstössen, Überlauf oder Browserfehlern.
// Unvollständige axe-Prüfungen bleiben im JSON sichtbar; sie sind kein Nachweis der Barrierefreiheit.
const fs = require('fs');
const {chromium} = require('playwright');
const path = require('path');
const BASE=(process.argv[2] || 'http://localhost:3000').replace(/\/$/, '');
const AXE=fs.readFileSync(process.argv[3],'utf8');
const OUT=path.resolve(process.argv[4] || 'output/a11y');
fs.mkdirSync(OUT,{recursive:true});
const results=[];
const errors=[];
(async()=>{
  const sitemapResponse=await fetch(BASE+'/sitemap.xml');
  if(!sitemapResponse.ok) throw new Error(`Sitemap HTTP ${sitemapResponse.status}`);
  const xml=await sitemapResponse.text();
  const paths=[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>new URL(m[1]).pathname);
  if(!paths.length || new Set(paths).size!==paths.length) throw new Error('Sitemap leer oder mit doppelten Seiten');
  const expectedRuns=paths.length*2;
  const queue=paths.flatMap(path=>[{path,width:1440,height:900},{path,width:390,height:844}]);
  const browser=await chromium.launch();
  async function worker(){
    const context=await browser.newContext();
    const page=await context.newPage();
    while(queue.length){
      const task=queue.shift();
      await page.setViewportSize({width:task.width,height:task.height});
      const pageErrors=[];
      const listener=e=>pageErrors.push(String(e));
      page.on('pageerror',listener);
      try{
        const response=await page.goto(BASE+task.path,{waitUntil:'networkidle'});
        if(!response?.ok()) throw new Error(`Seite HTTP ${response?.status()}`);
        await page.evaluate(()=>document.fonts.ready);
        await page.addScriptTag({content:AXE});
        const result=await page.evaluate(async()=>{
          const r=await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa','best-practice']}});
          const simplify=v=>({id:v.id,impact:v.impact,help:v.help,helpUrl:v.helpUrl,nodes:v.nodes.map(n=>({html:n.html,target:n.target,failureSummary:n.failureSummary}))});
          return {violations:r.violations.map(simplify),incomplete:r.incomplete.map(simplify),overflow:document.documentElement.scrollWidth-document.documentElement.clientWidth,height:document.documentElement.scrollHeight};
        });
        results.push({...task,...result,pageErrors});
      }catch(error){errors.push({...task,error:String(error)});}
      page.off('pageerror',listener);
      if(results.length%32===0) console.log('checked',results.length,'remaining',queue.length);
    }
    await context.close();
  }
  await Promise.all([worker(),worker(),worker()]);
  await browser.close();
  fs.writeFileSync(path.join(OUT,'axe-results.json'),JSON.stringify({base:BASE,timestamp:new Date().toISOString(),results,errors},null,2));
  const violations=results.filter(x=>x.violations.length);
  const groups={};
  for(const r of violations)for(const v of r.violations){groups[v.id]??=[];groups[v.id].push({path:r.path,width:r.width,nodes:v.nodes.length});}
  process.exitCode=results.length!==expectedRuns || errors.length || violations.length || results.some(x=>x.overflow>0 || x.pageErrors.length) ? 1 : 0;
  console.log(JSON.stringify({pages:paths.length,runs:results.length,errors,groups,overflow:results.filter(x=>x.overflow>0).map(x=>({path:x.path,width:x.width,overflow:x.overflow})),pageErrors:results.filter(x=>x.pageErrors.length).map(x=>({path:x.path,width:x.width,errors:x.pageErrors}))},null,2));
})().catch(error=>{console.error(error);process.exit(1)});
