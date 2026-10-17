import { test, expect } from '@playwright/test';
import { readFile } from 'node:fs/promises';
import { resolve, extname } from 'node:path';

// Serve the built preview in the browser without relying on a network server.
test.beforeEach(async ({page})=>{
 await page.route('http://127.0.0.1:4185/**',async route=>{
  const path=new URL(route.request().url()).pathname;
  const file=resolve('dist',path==='/'?'index.html':path.slice(1)+(extname(path)?'':'.html'));
  if(!file.startsWith(resolve('dist')+'/')&&!file.startsWith(resolve('dist')+'\\'))return route.abort();
  const contentType={'.html':'text/html','.js':'application/javascript','.css':'text/css','.jpg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml','.ico':'image/x-icon'}[extname(file)]||'application/octet-stream';
  try{await route.fulfill({body:await readFile(file),contentType});}catch{await route.fulfill({status:404,body:''});}
 });
});

test('prices stay out of the reading flow and can be opened and dismissed accessibly', async ({page})=>{
 await page.goto('/');
 await expect(page.locator('.hp-rates')).not.toBeVisible();
 const trigger=page.getByRole('button',{name:'Läs om sessioner och priser'});
 await trigger.click();
 const rates=page.getByRole('dialog',{name:'Sessioner och priser'});
 await expect(rates).toBeVisible();
 await expect(rates).toContainText('3 000 kr');
 await expect(rates).toContainText('8 000 kr');
 await expect(rates).toContainText('Fyra individuella sessioner på 90 minuter');
 await expect(rates).toContainText('Tre förinspelade sessioner');
 await expect(rates).toContainText('Uppföljningssamtal på 30 minuter');
 await expect(page.getByRole('button',{name:'Stäng priser'})).toBeFocused();
 await page.keyboard.press('Escape');
 await expect(rates).not.toBeVisible();
 await expect(trigger).toBeFocused();
 await trigger.click();
 await page.getByRole('button',{name:'Stäng priser'}).click();
 await expect(trigger).toBeFocused();
});
test('preview validates, completes without transmission, resets and restores focus', async ({page})=>{
 const sent=[];
 page.on('request',r=>{if(r.method()==='POST'||/google-analytics|googletagmanager|embedsocial/.test(r.url()))sent.push(r.url());});
 await page.goto('/');
 const trigger=page.locator('.hp-hero').getByRole('button',{name:/Boka gratis/});
 await trigger.click();
 await expect(page.getByRole('dialog')).toBeVisible();
 await expect(page.getByLabel('Namn *',{exact:true})).toBeFocused();
 await page.getByRole('button',{name:/Skicka konsultations/}).click();
 await expect(page.getByRole('status')).toHaveCount(0);
 await page.getByLabel('Namn *',{exact:true}).fill('Testperson');
 await page.getByLabel('E-post *',{exact:true}).fill('test@example.com');
 await page.getByRole('radio',{name:'Google Meet',exact:true}).check();
 await expect(page.locator('textarea')).toHaveCount(0);
 await page.getByRole('button',{name:/Skicka konsultations/}).click();
 await expect(page.getByRole('status')).toContainText('Ingen förfrågan har skickats');
 await page.getByRole('button',{name:'Stäng förhandsvisningen'}).click();
 await expect(trigger).toBeFocused();
 await trigger.click();
 await expect(page.getByLabel('Namn *',{exact:true})).toHaveValue('');
 await page.keyboard.press('Escape');
 await expect(page.getByRole('dialog')).toHaveCount(0);
 expect(sent).toEqual([]);
});
test('keyboard focus stays in dialog and information link works',async({page})=>{
 await page.goto('/');await page.locator('.hp-hero button').click();
 const close=page.getByRole('button',{name:'Stäng konsultationsformuläret'});
 await close.focus();await page.keyboard.press('Shift+Tab');
 await expect(page.getByRole('button',{name:/Skicka konsultations/})).toBeFocused();
 await page.keyboard.press('Tab');await expect(close).toBeFocused();
 await page.goto('/integritet-forhandsversion');
 await expect(page.getByRole('heading',{level:1})).toContainText('testformuläret');
 await expect(page.locator('meta[name=robots]')).toHaveAttribute('content','noindex, nofollow');
});
for(const width of [320,390,768,1440])test(`responsive layout ${width}`,async({page})=>{
 await page.setViewportSize({width,height:900});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('/');await page.locator('.hp-hero-image img').waitFor();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 await expect(page.getByRole('heading',{level:1})).toHaveCount(1);
 if(width<=900){await page.getByRole('button',{name:'Meny',exact:true}).click();await expect(page.getByRole('navigation',{name:'Mobilmeny'})).toBeVisible();await page.getByRole('navigation',{name:'Mobilmeny'}).getByRole('link',{name:'För dig',exact:true}).click();await expect(page.getByRole('navigation',{name:'Mobilmeny'})).toHaveCount(0);await page.evaluate(()=>scrollTo(0,0));}
 await page.screenshot({path:`../../outputs/startsida-${width}.png`,fullPage:true});
 await page.locator('.hp-hero button').click();
 await expect(page.getByRole('button',{name:/Skicka konsultations/})).toBeVisible();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 if(width===390||width===1440)await page.screenshot({path:`../../outputs/formular-${width}.png`});
 expect(errors).toEqual([]);
});

test('phone is preferred, Meet works without a number, and no request is transmitted',async({page})=>{
 const sent=[];page.on('request',r=>{if(r.method()==='POST')sent.push(r.url());});
 await page.goto('/');await page.locator('.hp-hero button').click();
 await expect(page.getByRole('radio',{name:'Telefon',exact:true})).toBeChecked();
 await expect(page.getByLabel('Telefonnummer *',{exact:true})).toHaveAttribute('required','');
 await page.getByLabel('Namn *',{exact:true}).fill('Testperson');await page.getByLabel('E-post *',{exact:true}).fill('test@example.com');
 await page.getByRole('button',{name:'Skicka konsultationsförfrågan',exact:true}).click();
 await expect(page.getByRole('status')).toHaveCount(0);
 await page.getByLabel('Telefonnummer *',{exact:true}).fill('0701234567');
 await page.getByRole('button',{name:'Skicka konsultationsförfrågan',exact:true}).click();
 await expect(page.getByRole('status')).toContainText('Ingen förfrågan har skickats');
 expect(sent).toEqual([]);
});

test('navigation clears the sticky header and the optional video loads only on request',async({page})=>{
 await page.setViewportSize({width:390,height:844});await page.goto('/');
 await expect(page.locator('.hp-video iframe')).toHaveCount(0);
 await page.getByRole('button',{name:'Meny',exact:true}).click();await page.keyboard.press('Escape');
 await expect(page.getByRole('navigation',{name:'Mobilmeny'})).toHaveCount(0);
 await expect(page.getByRole('button',{name:'Meny',exact:true})).toBeFocused();
 await page.getByRole('button',{name:'Meny',exact:true}).click();await page.getByRole('navigation',{name:'Mobilmeny'}).getByRole('link',{name:'Så går det till',exact:true}).click();
 await expect(page.locator('.hp-header')).toHaveClass(/hp-header-scrolled/);
 await expect.poll(async()=>page.evaluate(()=>document.querySelector('#sa-gar-det-till h2').getBoundingClientRect().top>=document.querySelector('.hp-header').getBoundingClientRect().bottom)).toBe(true);
 await page.route('https://www.youtube-nocookie.com/**',r=>r.fulfill({body:'<p>Video test placeholder</p>',contentType:'text/html'}));
 await page.getByRole('button',{name:/Öppna introduktionen/}).click();
 await expect(page.locator('.hp-video iframe')).toHaveAttribute('src',/FYSi_FQKrp8/);
});

test('personal and practical pages keep the same first-contact flow and link to prices', async ({page})=>{
 await page.setViewportSize({width:390,height:844});
 for(const path of ['/om-mig','/hypnoterapi-online']){
  await page.goto(path);
  await expect(page.getByRole('heading',{level:1})).toHaveCount(1);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  await page.getByRole('button',{name:'Boka gratis konsultation',exact:true}).click();
  await expect(page.getByLabel('Namn *',{exact:true})).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button',{name:'Boka gratis konsultation',exact:true})).toBeFocused();
 }
 await page.getByRole('contentinfo').getByRole('link',{name:'Sessioner och priser'}).click();
 await expect(page.getByRole('dialog',{name:'Sessioner och priser'})).toBeVisible();
 await page.keyboard.press('Escape');
 await page.goto('/hypnoterapi-online');
 await page.locator('.hp-online-prices>summary').click();
 await expect(page.locator('.hp-online-prices')).toContainText('8 000 kr');
 await expect(page.locator('.hp-online-prices')).toContainText('Tre förinspelade sessioner');
});
