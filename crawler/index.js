 const puppeteer = require('puppeteer');
 const Crawler = require('crawler')

 ( async () => {
   const browser = await puppeteer.launch();
   const page = await browser.newPage();
 const pagina =  await page.goto('https://www.linkedin.com/jobs/search/?geoId=106057199&keywords=php&location=Brasil', {waitUntil: 'networkidle2'});
  //  const dimensions = await page.evaluate(() => {
  //   return {
  //    titlePrincipal: document.querySelector(".results-context-header__job-count").textContent,
  //    vaga: document.querySelector(".result-card__full-card-link").textContent

  //   };
  // });

  const raspar = new Crawler({
    callback: function(error, res, done){
      if(error){
        console.log(error);
      }else{
        const $ = res.$;
        console.log($((".result-card__full-card-link")));
      }
      done();
    }
  })

  raspar.queue(pagina);
  // const aHandle = await page.evaluateHandle(() => document.body);
  // const resultHandle = await page.evaluateHandle(body => body.innerHTML, aHandle);
  
  // console.log(await resultHandle.document.querySelector("h1"));
  // await resultHandle.dispose();
 
  // console.log(dimensions);
   await browser.close();
 })();