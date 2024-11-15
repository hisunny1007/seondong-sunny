const axios = require('axios');
const { JSDOM } = require('jsdom');
const { dafault: puppeteer } = require('puppeteer');

async function scrapingPractice() {
  const URL = 'https://comic.naver.com/webtoon?tab=mon';
  const response = await axios.get(URL)

  const browser = await puppeteer.launch({
    headless: false,
  });

  const page = await browser.newPage();
  await page.goto(URL);
}

scrapingPractice();

// const axios = require('axios');
// const { JSDOM } = require('jsdom');
// const { default: puppeteer } = require('puppeteer');

// async function scrapingPractice() {
//   const URL = 'https://comic.naver.com/webtoon?tab=mon';
//   const response = await axios.get(URL);

//   const brower = await puppeteer.launch({
//     headless: false,
//   });

//   const page = await brower.newPage();

//   await page.goto(URL);
// }

// scrapingPractice();
