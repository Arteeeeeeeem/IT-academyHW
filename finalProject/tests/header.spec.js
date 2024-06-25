const {test, expect} = require("@playwright/test");
const Base = require('../helpers/base');
const Header = require('../pageObjects/headerPage');
const ProductsListPage = require('../pageObjects/productsListPage');
const MainPage = require('../pageObjects/mainPage');


test.describe('website header testing', () => {
    let base;
    let header;
    let productsListPage;
    let mainPage;
    test.beforeEach(async ({page}) => {
        base = new Base(page);
        header = new Header(page);
        productsListPage = new ProductsListPage(page);
        mainPage = new MainPage(page);
        await base.navigate('https://www.lamoda.by');
    });

    test('check logo "Lamoda" should redirect to the homepage for women',
        async ({page}) => {
        await expect(header.headerLogo).toHaveAttribute('href', /women-home/);
    });

    test('check the header should include a "Подлинные товары" pop-up',
        async ({page}) => {
        await mainPage.hoverOn(header.authenticProductsBtn);
        await expect(header.authenticProductsPopup).toContainText('Все товары — подлинные. Подтвердим сертификатами производителей.');
    });

    test('check title site',
        async ({ page }) => {
        await page.goto('https://www.lamoda.by');
        await expect(page).toHaveTitle(/Интернет магазин одежды и обуви. Купить обувь, купить одежду, аксессуары в онлайн магазине Lamoda.by/);
    });

    test('check search word "adidas" should leads to the adidas brand page',
        async ({page}) => {
        const brandName = 'adidas';
        await header.searchProduct(brandName);
        await expect(productsListPage.pageTitle).toHaveText(brandName);
    });
})