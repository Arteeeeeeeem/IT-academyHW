const Base = require('../helpers/base');

class CartShopPage extends Base {
    constructor(page) {
        super(page);
    }

    get messageAddProductToCart() {
        return this.page.locator('//*[text()="Товар добавлен в корзину"]');
    }

    get btnToCart() {
        return this.page.locator('//*[@class="d-modal__bottom"]/*[@href="/checkout/cart/"]');
    }

    get blockOfProductCart() {
        return this.page.locator('//*[@class="preloader preloader_1 preloader_scrollable preloader_wrapper"]');
    }

    get btnDeleteProductCart() {
        return this.page.locator('//*[text()="Удалить"]');
    }

    get deleteMassage() {
        return this.page.locator('//*[@class="_title_k4g9v_9"]');
    }

    get promocodBtn() {
        return this.page.locator('//*[@class="_root_1q6dc_65 _promocodesAndCertificates_11edv_107"]');
    }

    get promocodField() {
        return this.page.locator('//*[@id="coupon_code"]');
    }

    get enterPromocodBtn() {
        return this.page.locator('//*[@aria-label="Применить промокод к корзине"]');
    }

    get errorMessagePromocode() {
        return this.page.locator('//*[@class="_error_1k8kq_13"]');
    }

    async clickBtnDeleteProduct (btn) {
        await this.blockOfProductCart.hover();
        await btn.click();
    }

    async usePromocod (promocod) {
        await this.promocodBtn.click();
        await this.promocodField.fill(promocod);
        await this.enterPromocodBtn.click();
    }
}

module.exports = CartShopPage;