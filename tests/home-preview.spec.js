import { test, expect } from '@playwright/test';
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
 if(width<700){await page.getByRole('button',{name:'Meny',exact:true}).click();await expect(page.getByRole('navigation',{name:'Mobilmeny'})).toBeVisible();await page.getByRole('navigation',{name:'Mobilmeny'}).getByRole('link',{name:'För dig',exact:true}).click();await expect(page.getByRole('navigation',{name:'Mobilmeny'})).toHaveCount(0);await page.evaluate(()=>scrollTo(0,0));}
 await page.screenshot({path:`../../outputs/startsida-${width}.png`,fullPage:true});
 await page.locator('.hp-hero button').click();
 await expect(page.getByRole('button',{name:/Skicka konsultations/})).toBeVisible();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 if(width===390||width===1440)await page.screenshot({path:`../../outputs/formular-${width}.png`});
 expect(errors).toEqual([]);
});
