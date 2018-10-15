const {Before,After} = require('cucumber');
const {Builder, By, Key, until} = require('selenium-webdriver');
require('chromedriver'); 
var {setDefaultTimeout} = require('cucumber');

Before(async function() {
  driver = await new Builder().forBrowser('chrome').build();

  await driver.manage()
      .setTimeouts( { implicit: 20000, 
      pageLoad: 60000, 
      script: 20000 } ); 
  
  // Set the Cucumber Steps timeout (default is only 5s)
  setDefaultTimeout(30 * 1000);
});

After(async function() {
  return await driver.quit(); 
});

