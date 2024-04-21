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

describe('Check URL', () => {
    test("Test to check the 'Mobile Emulation' URL", async () => {
        await driver.get(siteURL);
        const menuMore = await driver.findElement(By.xpath('//a[text()="More"]'))
        await menuMore.click();
        const mobileEmulationLink = await driver.wait(until.elementLocated(By.xpath('//a[text()="Mobile Emulation" and @data-level="2"]')));
        await mobileEmulationLink.click();
        const mobileEmulationURL = await driver.getCurrentUrl();
        expect(mobileEmulationURL.includes('/mobile-emulation')).toBe(true);
    })
    afterAll(() => {
        driver.quit();
    })
});