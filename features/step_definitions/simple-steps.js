const { Given, When, Then,skipped } = require('cucumber')
const { expect } = require('chai')
const {By, Key, until} = require('selenium-webdriver');

Given('I am on the Google web page', async function () { 
    await driver.get('https://www.google.co.uk'); 
});

When('I search for {string}', async function (searchString) { 
    await driver.findElement(By.name("q")).click();
    await driver.findElement(By.name("q")).sendKeys(searchString + Key.RETURN);
});

Then('{string} appears in the results', async function (searchString) {
    var bodyText = await driver.findElement(By.tagName('Body')).getText();
    expect(bodyText).to.include(searchString);
});
