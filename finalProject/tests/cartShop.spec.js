const {test, expect} = require("@playwright/test");
const Base = require('../helpers/base');
const Header = require('../pageObjects/headerPage');
const ProductPage = require('../pageObjects/productPage');
const CartShopPage = require('../pageObjects/CartShopPage');
const MainPage = require('../pageObjects/mainPage');
const ListOfProductsPage = require('../pageObjects/productsListPage');


test.describe('testing cart', () => {
    let base;
    let header;
    let productPage;
    let cartShopPage;
    let mainPage;
    let listProductsPage;
    test.beforeEach(async ({page}) => {
        base = new Base(page);
        header = new Header(page);
        productPage = new ProductPage(page);
        cartShopPage = new CartShopPage(page);
        mainPage = new MainPage(page);
        listProductsPage = new ListOfProductsPage(page);
        await base.navigate('https://www.lamoda.by');
    });

    test('check when adding an product to the cart a message about adding the product should appear',
        async ({page}) => {
        await header.searchProduct('кошелек Emporio Armani');
        await listProductsPage.firstProductListAddCart();
        await expect(cartShopPage.messageAddProductToCart).toBeEnabled();
    });

    test('check after deleting an product from the cart the message about empty cart should appear',
        async ({page}) => {
        await header.searchProduct('мужские очки');
        await listProductsPage.firstProductListAddCart();
        await cartShopPage.click(cartShopPage.btnToCart);
        await cartShopPage.clickBtnDeleteProduct(cartShopPage.btnDeleteProductCart);
        await expect(cartShopPage.deleteMassage).toHaveText('Корзина пока пустая');
    });

    test('check the inscription about empty cart in it without product in the cart',
        async ({page}) => {
        await mainPage.click(header.CartShopBtn);
        await expect(cartShopPage.deleteMassage).toHaveText('Корзина пока пустая');
    });

    test('check the use of promo code with spaces should error "Код купона содержит недопустимые символы"',
        async ({page}) => {
        await header.searchProduct('очки женские');
        await listProductsPage.firstProductListAddCart();
        await cartShopPage.click(cartShopPage.btnToCart);
        await cartShopPage.usePromocod('ЛЕТО 2024');
        await expect(cartShopPage.errorMessagePromocode).toHaveText('Код купона содержит недопустимые символы');
    });

    test('check the use of inactive promo code should error "Акция не найдена"',
        async ({page}) => {
        await header.searchProduct('сумка Guess');
        await listProductsPage.firstProductListAddCart();
        await cartShopPage.click(cartShopPage.btnToCart);
        await cartShopPage.usePromocod('ЛЕТО2024');
        await expect(cartShopPage.errorMessagePromocode).toHaveText('Акция не найдена');
    });

})