const {test, expect} = require("@playwright/test");
const Base = require('../helpers/base');
const Footer = require('../pageObjects/footerPage');
const MainPage = require('../pageObjects/mainPage');


test.describe('website footer testing', () => {
    let base;
    let footer;
    let mainPage;
    test.beforeEach(async ({page}) => {
        base = new Base(page);
        footer = new Footer(page);
        mainPage = new MainPage(page);
        await base.navigate('https://www.lamoda.by');
    });
    test('check footer link "Премиум бренды" should be list brands with "Karl Lagerfeld"',
        async ({page}) => {
        await mainPage.click(footer.primeBrandsFooterBtn);
        await expect(footer.LagerfeldFooterBtn).toHaveText('Karl Lagerfeld');
        });

    test('check after clicking the "Подписаться" button without email  should be error "Заполните электронную почту"',
        async ({page}) => {
        await mainPage.click(footer.subscrBtn);
        await expect(footer.subscrError).toBeVisible();
    });

    test('check should be red text of agree personal data after click Subscribe without inactive checkbox',
        async ({page}) => {
        await mainPage.click(footer.subscrBtn);
        await expect(footer.boxAgreePersData).toHaveCSS('color', 'rgb(194, 0, 0)');
    });

})