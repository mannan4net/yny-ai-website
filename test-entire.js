import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER:', msg.text()));

  try {
    await page.goto('http://localhost:5173');
    await page.waitForTimeout(2000);
    // Overwrite the captureAllViews and captureEntireWebsite for debugging
    await page.evaluate(() => {
      window.captureEntireWebsiteTest = async () => {
        const routes = ["/", "/methodology"];
        console.log("Starting entire website capture...");
        const JSZip = (await import('/node_modules/.vite/deps/jszip.js?v=bbba0584')).default;
        const htmlToImage = await import('/node_modules/.vite/deps/html-to-image.js?v=bbba0584');
        
        const zip = new JSZip();
        const folder = zip.folder("test");
        const iframe = document.createElement("iframe");
        iframe.style.width = `1280px`;
        iframe.style.height = `800px`;
        document.body.appendChild(iframe);
        
        for (const route of routes) {
          console.log("Navigating to", route);
          await new Promise((resolve) => {
            iframe.onload = () => { console.log("Iframe loaded", route); resolve(); };
            iframe.src = route;
          });
          console.log("Wait 2s");
          await new Promise(r => setTimeout(r, 2000));
          console.log("Capturing...");
          try {
             const blob = await htmlToImage.toBlob(iframe.contentDocument.body);
             console.log("Captured blob:", blob ? blob.size : "null");
          } catch(e) {
             console.log("Error capturing:", e.message);
          }
        }
        console.log("Done");
      };
    });
    
    await page.evaluate(() => window.captureEntireWebsiteTest());
  } catch (e) {
    console.error("Test script failed", e);
  } finally {
    await browser.close();
  }
})();
