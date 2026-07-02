import html2canvas from "html2canvas-pro";
import JSZip from "jszip";
import { saveAs } from "file-saver";

// Helper to generate filenames
const generateFilename = (prefix: string, ext = "png") => {
  const date = new Date();
  const timestamp = date.getFullYear() +
    String(date.getMonth() + 1).padStart(2, '0') +
    String(date.getDate()).padStart(2, '0') +
    "-" +
    String(date.getHours()).padStart(2, '0') +
    String(date.getMinutes()).padStart(2, '0') +
    String(date.getSeconds()).padStart(2, '0');
  
  const path = window.location.pathname;
  let slug = path === "/" ? "home" : path.replace(/^\//, '').replace(/\//g, '-');
  if (!slug) slug = "home";

  return `${prefix}-${slug}-${timestamp}.${ext}`;
};

// Helper to temporarily hide elements with `.hide-on-capture` class
const hideCaptureElements = () => {
  const elements = document.querySelectorAll(".hide-on-capture") as NodeListOf<HTMLElement>;
  const originalDisplay: string[] = [];
  elements.forEach((el, index) => {
    originalDisplay[index] = el.style.display;
    el.style.display = "none";
  });
  return () => {
    elements.forEach((el, index) => {
      el.style.display = originalDisplay[index];
    });
  };
};

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const captureCurrentScreenToCanvas = async () => {
  const appContainer = document.querySelector('#root > div') as HTMLElement;
  const originalRootStyle = { height: appContainer?.style.height, overflow: appContainer?.style.overflow };
  
  const originalBodyStyle = { height: document.body.style.height, overflow: document.body.style.overflow };
  document.body.style.height = 'auto';
  document.body.style.overflow = 'visible';
  if (appContainer) {
    appContainer.style.height = 'auto';
    appContainer.style.overflow = 'visible';
  }

  const overrides: {el: HTMLElement, overflowY: string, height: string, maxHeight: string}[] = [];
  document.querySelectorAll('*').forEach(node => {
    const el = node as HTMLElement;
    const style = window.getComputedStyle(el);
    if (style.overflowY === 'auto' || style.overflowY === 'scroll') {
      overrides.push({ el, overflowY: el.style.overflowY, height: el.style.height, maxHeight: el.style.maxHeight });
      el.style.overflowY = 'visible';
      el.style.height = 'auto';
      el.style.maxHeight = 'none';
    }
  });

  await wait(150);

  const canvas = await html2canvas(document.body, { 
    useCORS: true, 
    backgroundColor: '#ffffff'
  });

  document.body.style.height = originalBodyStyle.height;
  document.body.style.overflow = originalBodyStyle.overflow;
  if (appContainer) {
    appContainer.style.height = originalRootStyle.height;
    appContainer.style.overflow = originalRootStyle.overflow;
  }

  overrides.forEach(({ el, overflowY, height, maxHeight }) => {
    el.style.overflowY = overflowY;
    el.style.height = height;
    el.style.maxHeight = maxHeight;
  });

  return canvas;
};

export const captureCurrentView = async () => {
  const restoreElements = hideCaptureElements();
  await wait(300);

  try {
    const canvas = await html2canvas(document.body, {
      x: window.scrollX,
      y: window.scrollY,
      width: window.innerWidth,
      height: window.innerHeight,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      useCORS: true,
      scale: window.devicePixelRatio || 2,
    });
    
    canvas.toBlob((blob) => {
      if (blob) saveAs(blob, generateFilename("yny-ai-view"));
    });
  } catch (err) {
    console.error(err);
    alert("Capture failed.");
  } finally {
    restoreElements();
  }
};

export const captureFullPage = async () => {
  const restoreElements = hideCaptureElements();
  await wait(300);

  try {
    const canvas = await captureCurrentScreenToCanvas();
    canvas.toBlob((blob) => {
      if (blob) saveAs(blob, generateFilename("yny-ai-full"));
    });
  } catch (err) {
    console.error(err);
    alert("Capture failed.");
  } finally {
    restoreElements();
  }
};

export const captureAllViews = async () => {
  const restoreElements = hideCaptureElements();
  const originalScrollY = window.scrollY;
  
  try {
    const viewportHeight = window.innerHeight;
    const totalHeight = document.documentElement.scrollHeight;
    const scrollPositions = [];
    
    for (let currentY = 0; currentY < totalHeight; currentY += viewportHeight) {
      scrollPositions.push(currentY);
    }
    
    const finalCanvas = document.createElement("canvas");
    finalCanvas.width = window.innerWidth * (window.devicePixelRatio || 2);
    finalCanvas.height = totalHeight * (window.devicePixelRatio || 2);
    const ctx = finalCanvas.getContext("2d");
    
    if (!ctx) throw new Error("Failed to get 2d context for final canvas");

    for (let i = 0; i < scrollPositions.length; i++) {
      const y = scrollPositions[i];
      window.scrollTo(0, y);
      await wait(500);
      
      const captureHeight = Math.min(viewportHeight, totalHeight - y);
      const sectionCanvas = await html2canvas(document.body, {
        x: 0,
        y: y,
        width: window.innerWidth,
        height: captureHeight,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        useCORS: true,
        scale: window.devicePixelRatio || 2,
      });
      
      ctx.drawImage(
        sectionCanvas, 
        0, 
        y * (window.devicePixelRatio || 2), 
        sectionCanvas.width, 
        sectionCanvas.height
      );
    }
    
    finalCanvas.toBlob((blob) => {
      if (blob) saveAs(blob, generateFilename("yny-ai-all-views"));
    });
    
  } catch (err) {
    console.error(err);
    alert("Capture failed.");
  } finally {
    window.scrollTo(0, originalScrollY);
    restoreElements();
  }
};

export const captureEntireWebsite = async (routes: string[]) => {
  const zip = new JSZip();
  const folder = zip.folder("yny-ai-website-capture");
  if (!folder) {
    throw new Error("Failed to create zip folder");
  }

  const originalPath = window.location.pathname;
  const restoreElements = hideCaptureElements();

  try {
    for (const route of routes) {
      
      // Navigate using history API to avoid full page reloads while triggering wouter
      history.pushState(null, '', route);
      window.dispatchEvent(new Event('popstate'));
      
      // Wait for initial render
      await wait(500);

      // Scroll through the entire page to trigger all lazy-loaded elements/animations
      const viewportHeight = window.innerHeight;
      // Use body.scrollHeight as a fallback for documentElement
      let totalHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      
      // We might need to briefly apply overrides to get the true height if it's hidden by overflow
      const appContainer = document.querySelector('#root > div') as HTMLElement;
      if (appContainer) {
        appContainer.style.height = 'auto';
        appContainer.style.overflow = 'visible';
      }
      document.body.style.height = 'auto';
      document.body.style.overflow = 'visible';
      
      totalHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);

      for (let currentY = 0; currentY < totalHeight; currentY += viewportHeight) {
        window.scrollTo(0, currentY);
        await wait(300);
      }
      
      // Scroll back to top before capturing
      window.scrollTo(0, 0);
      
      // Restore styles before captureCurrentScreenToCanvas takes over
      if (appContainer) {
        appContainer.style.height = '';
        appContainer.style.overflow = '';
      }
      document.body.style.height = '';
      document.body.style.overflow = '';

      await wait(500);

      const canvas = await captureCurrentScreenToCanvas();
      const blob = await new Promise<Blob | null>(resolve => canvas.toBlob(resolve, 'image/png'));
      
      if (blob) {
        let slug = route === "/" ? "home" : route.replace(/^\//, '').replace(/\//g, '-');
        if (!slug) slug = "home";
        folder.file(`yny-ai-${slug}.png`, blob);
      }
    }

    await wait(200);

    const zipBlob = await zip.generateAsync({ type: "blob" });
    saveAs(zipBlob, generateFilename("yny-ai-website-full", "zip"));

  } catch (err) {
    console.error("Failed to capture all screens", err);
    alert("Failed to capture entire website. Check console.");
  } finally {
    // Restore original route
    history.pushState(null, '', originalPath);
    window.dispatchEvent(new Event('popstate'));
    restoreElements();
  }
};
