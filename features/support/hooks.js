const { BeforeAll, Before, After, Status } = require('cucumber');
const { Builder, By, Key, until } = require('selenium-webdriver');
require('chromedriver');
var { setDefaultTimeout } = require('cucumber');

BeforeAll(function () {
    // Set the Cucumber Steps timeout (default is only 5s)
    //setDefaultTimeout(30 * 1000); // How do you turn the timeout off?
    setDefaultTimeout(-1);
});

Before(async function () {
    driver = await new Builder().forBrowser('chrome').build();

    await driver.manage()
        .setTimeouts({
            implicit: 20000,
            pageLoad: 60000,
            script: 20000
        });
});

After(async function (testCase) {
    //If the Scenario Fails, Take a Screenshot and attach to Results
    var world = this;
    if (testCase.result.status === Status.FAILED) {
        var screenShot = await driver.takeScreenshot();
        // screenShot is a base-64 encoded PNG
        world.attach(screenShot, 'image/png');
    }
    return await driver.quit();
});

