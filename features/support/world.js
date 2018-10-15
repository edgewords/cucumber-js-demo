var {setWorldConstructor} = require('cucumber');
const {Builder, By, Key, until} = require('selenium-webdriver');
require('chromedriver'); 

async function World() {
    console.log('World was callled !!!!!!!!!');
    this.driver = await new Builder().forBrowser('chrome').build();

    await this.driver.manage()
        .setTimeouts( { implicit: 20000, 
        pageLoad: 60000, 
        script: 20000 } ); 

}

