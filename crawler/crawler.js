const puppeteer = require("puppeteer");
const save = require('./saveToDB');

const crawler = async tech => {
  const browser = await puppeteer.launch({
    headless: true
  });
  const page = await browser.newPage();

  await page.goto(
    `https://www.linkedin.com.br/jobs/search/?f_TPR=r2592000&geoId=106057199&keywords=desenvolvedor%20${tech}&location=Brasil&f_TP=1%2C2%2C3%2C4`
  );
  await page.waitForSelector("button.filter-dropdown__button"); //wait for the filter button
  await page.evaluate(() => {
    const buttonFilter = document.querySelector(
      "button.filter-dropdown__button"
    );
    buttonFilter.click();
  });
  await page.waitForSelector("#TIME_POSTED-2"); //wait for the Last Month filter
  await page.evaluate(() => {
    const inputLastMonth = document.querySelector("#TIME_POSTED-2");
    inputLastMonth.click();
    const btSubmit = document.querySelector(".filter-button-dropdown__action");
    btSubmit.click();
  });

  await page.waitForSelector("span.results-context-header__job-count");

  const jobsCounter = await page.evaluate(() => {
    return document.querySelector("span.results-context-header__job-count")
      .innerText;
  });

  return jobsCounter;
};

const techs = ["php", "react", "nodejs"];


  techs.map(async tech =>{
   const value = await crawler(tech)
   const items = { name: tech, quantity: value }
   await save(items);
   
});




