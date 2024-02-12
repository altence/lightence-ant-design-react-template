import '@testing-library/jest-dom';
import { generateImage } from 'jsdom-screenshot';
import puppeteer from "puppeteer";
import fs from 'fs';

describe('MedicalDashboardPage regress test', () => {
  it('regress test', async () => {
    // const deployUrl = fs.readFileSync("deploy-url.txt", "utf-8");
    const deployUrl = 'https://lightence-ant-design-react-template.pages.dev/medical-dashboard'
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(deployUrl);

    const screenshot = await page.screenshot({ fullPage: true }); 

    expect(screenshot).toMatchImageSnapshot({
      comparisonMethod: 'ssim',
      failureThreshold: 1,
      failureThresholdType: 'percent'
    });

    await browser.close();
  }, 30000);
});
