const {test, expect} = require("@playwright/test");
const Base = require('../helpers/base');
const Header = require('../pageObjects/headerPage');
const ProductPage = require('../pageObjects/productPage');
const MainPage = require('../pageObjects/mainPage');
const ProductsListPage = require('../pageObjects/productsListPage');


test.describe('testing Product Page', () => {
    let base;
    let header;
    let productPage;
    let mainPage;
    let productsListPage;
    test.beforeEach(async ({page}) => {
        base = new Base(page);
        header = new Header(page);
        productPage = new ProductPage(page);
        mainPage = new MainPage(page);
        productsListPage = new ProductsListPage(page);
        await base.navigate('https://www.lamoda.by');
    });

    test('check the characteristics of the selected product',
        async ({page}) => {
            await header.searchProduct('David Jones', 'HUGO');
            await productPage.click(productsListPage.firstProductListed);
            await expect(productPage.characteristicsProduct).toBeEnabled();
        });

    test('check if the product name in the product list and product card match',
        async ({page}) => {
        await header.searchProduct('polaroid PLD', 'Ice&High Collection');
        const productName = await productsListPage.firstProductNameInList.innerText();
        await productPage.click(productsListPage.firstProductListed);
        await expect(productPage.nameProduct).toHaveText(productName);
    });

    test('check discounted product must have a discount size',
        async ({page}) => {
        await productsListPage.selectFirstProdCatSale(header.saleBtn);
        await expect(productPage.discountProduct).toBeEnabled();
        });

})