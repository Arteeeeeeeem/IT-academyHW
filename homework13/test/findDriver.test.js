const { Builder, By, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const siteURL = 'https://chromedriver.chromium.org/home';
let opts = new chrome.Options()
opts.setBrowserVersion('124')
let driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(opts)
    .build();
jest.setTimeout(30000)

describe('Find "driver"', () => {
    test("Test for find the 'driver' in the Search", async () => {
        await driver.get(siteURL);
        const openSearchBar = await driver.findElement(By.xpath('//*[@id="atIdViewHeader"]/div/div[2]/div[1]/div[2]/div/span/span/svg'));
        await openSearchBar.click();
        const searchField = await driver.findElement(By.xpath('//*[@id="yDmH0d"]/div[1]/div/div[1]/div[2]/div[3]/div[2]/div/div[1]/div/div[1]'));
        await searchField.sendKeys('driver');
        const searchButton = await driver.findElement(By.xpath('//*[@id="yDmH0d"]/div[1]/div/div[1]/div[2]/div[3]/div[2]/div/div[1]/div/span[1]/div[1]'));
        await searchButton.click();
        const firstFoundLink = await driver.wait(until.elementLocated(By.xpath('//*[@id="yDmH0d"]/div[1]/div/div[1]/div[3]/div[2]/div/div[2]/div[1]/div/div[1]/b'), 10000))
        expect(await firstFoundLink.getText()).toEqual('driver')
    })
    afterAll(() => {
        driver.quit();
    })
});