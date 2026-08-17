import{test,expect,devices} from '@playwright/test';

test('iphone emulation', async({browser})=>{

  //const iphone = devices['iPhone X'];
   //const context = await browser.newContext({...iphone});
  
 // test.use({...devices['iPad Pro 11 landscape'], browserName : 'chromium'});
  const iPad = devices['iPad Pro 11 landscape'];
  const context = await browser.newContext({...iPad});
  const page = await context.newPage();  
  await page.goto('https://www.playwright.dev');
  await expect(page).toHaveTitle(/Playwright/);
  await context.close();


});
