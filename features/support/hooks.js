const {Before,After} = require('cucumber');
const {Builder, By, Key, until} = require('selenium-webdriver');
require('chromedriver'); 

Before(async function() {
  driver = await new Builder().forBrowser('chrome').build();

  await driver.manage()
      .setTimeouts( { implicit: 20000, 
      pageLoad: 60000, 
      script: 20000 } ); 
});

After(async function() {
  await driver.quit(); 
});

