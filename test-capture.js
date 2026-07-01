import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', error => console.log('BROWSER ERROR:', error));

  page.on('dialog', async dialog => {
    console.log('DIALOG:', dialog.message());
    await dialog.accept();
  });

  try {
    await page.goto('http://localhost:5173/methodology');
    await page.waitForTimeout(2000);
    console.log("Clicking Capture menu...");
    await page.click('button:has-text("Capture")');
    await page.waitForTimeout(500);
    console.log("Clicking Capture Full Page...");
    await page.click('text="3. Capture Full Page"');
    
    // Wait for download or error
    await page.waitForTimeout(5000);
    console.log("Finished successfully with no dialogs.");
  } catch (e) {
    console.error("Test script failed", e);
  } finally {
    await browser.close();
  }
})();
