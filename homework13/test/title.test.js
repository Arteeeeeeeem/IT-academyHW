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

describe('Titles test', () => {
    test('Test for checking titles', async () => {
        await driver.get(siteURL);
        const mainTitle = await driver.findElement(By.xpath('//*[@id="h.p_ID_13"]'))
        expect(await mainTitle.getText()).toEqual('ChromeDriver')
        const headerChromeExtensions = await driver.findElement(By.xpath("//a[text()='Chrome Extensions' and contains(@class,'dk90Ob jgXgSe')]"));
        await headerChromeExtensions.click();
        const newMainTitle = await driver.findElement(By.xpath('//*[@id="h.p_ID_13"]/span'));
        await driver.executeScript("arguments[0].style.backgroundColor = 'yellow'", newMainTitle);
        expect(await newMainTitle.getText()).toEqual('Chrome Extensions')
    })
    afterAll(() => {
        driver.quit();
    })
});