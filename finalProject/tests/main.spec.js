const {test, expect} = require("@playwright/test");
const Base = require('../helpers/base');
const MainPage = require('../pageObjects/mainPage');
const ProductsListPage = require('../pageObjects/productsListPage');


test.describe('website Main Page testing', () => {
    let base;
    let mainPage;
    let productsListPage;
    test.beforeEach(async ({page}) => {
        base = new Base(page);
        mainPage = new MainPage(page);
        productsListPage = new ProductsListPage(page);
        await base.navigate('https://www.lamoda.by');
        await mainPage.scrollPage();
    });

    test('check section "Популярное" should comprises 6 branded products',
        async ({page}) => {
        await expect(mainPage.ProdPopularsSection).toHaveCount(6);
    });

})