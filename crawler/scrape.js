const puppeteer = require('puppeteer');

let scrape = async()=> {
  const broswer = await puppeteer.launch({headless: false});
  const page = await broswer.newPage();
  await page.goto('https://www.linkedin.com/jobs/search/?geoId=106057199&keywords=php&location=Brasil');
  await page.waitFor(1000);
    
  const result = await page.evaluate(()=>{
    let data = [];

    let total = document.querySelector('.results-context-header__job-count').innerHTML;
    let elements = document.querySelectorAll('.result-card__title');
    console.log(elements);
    
    for(var element of elements){
      let title = element.innerHTML;
      console.log(title)
      // let price = element.childNodes[7].children[0].innerText;

      data.push({title});
    }

    return data;
  })

  broswer.close();
  return result;
};

scrape().then((value)=>{
  console.log(value);
})

