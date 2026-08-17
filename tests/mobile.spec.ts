import {test,expect,devices} from 'playwright/test';

test('mobile Automation', async ({browser})=>{
    const context = await browser.newContext({...devices['iPhone 13 Pro Max']});
    const page = await context.newPage();
    await page.goto('https://www.amazon.com/');
    await expect(page).toHaveTitle(/Amazon/);
    await page.screenshot({path:'screenshot.png',fullPage:true});
   
    await context.close();
    });