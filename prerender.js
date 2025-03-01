import puppeteer from "puppeteer";
import fs from "fs-extra"
import path from "path"

const BASE_URL = "http://localhost:5173";
const PAGES = ["/",'/about','/contact','/services','/terms']; // pages to pre-render

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  for (let route of PAGES) {
   
    const url = `${BASE_URL}${route}`;
    console.log(`Rendering ${url}`);

    await page.goto(url, { waitUntil: "networkidle2" });
    // await page.evaluate(() => {
    //     // Remove all <style> tags from <head>
    //     document.querySelectorAll('head style').forEach(el => el.remove());
    //     //remove all class tags from entire page
    //     document.querySelectorAll('*').forEach(el => el.removeAttribute('class'));
    // });
    const html = await page.content();
    const filePath = path.join("prerendered", route === "/" ? "index.html" : `${route}.html`);
    fs.outputFileSync(filePath, html);
    console.log(`Saved: ${filePath}`);
  }

  await browser.close();
})();
