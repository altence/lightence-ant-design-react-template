import '@testing-library/jest-dom';
import { generateImage } from 'jsdom-screenshot';
import puppeteer from "puppeteer";
import fs from 'fs';

describe('NftDashboardPage regress test', () => {
  it('regress test', async () => {
    const deployUrl = fs.readFileSync("deploy-url.txt", "utf-8");
    // const deployUrl = 'https://lightence-ant-design-react-template.pages.dev'
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(deployUrl);

    await page.waitForTimeout(20000)

    const screenshot = await page.screenshot({ fullPage: true }); 

    expect(screenshot).toMatchImageSnapshot();

    await browser.close();
  }, 30000);
});
