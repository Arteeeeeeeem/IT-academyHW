const Base = require('../helpers/base');

class ProductsListPage extends Base {
    constructor(page) {
        super(page);
    }

    get addToCartButton() {
        return this.page.locator('//*[@aria-label="Добавить в корзину"]');
    }

    get pageTitle() {
        return this.page.locator('//*[contains(@class, "titleText")]');
    }

    async selectFirstProdCatSale (category) {
        await category.click();
        await this.firstProductListed.click();
    }

    async firstProductListAddCart () {
        await this.firstProductListed.click();
        await this.addToCartButton.click();
    }

    get firstProductNameInList() {
        return this.page.locator('//*[@class="grid__catalog"]/div[1]//*[@class="x-product-card-description__microdata-wrap"]/div[2]');
    }

    get firstProductListed() {
        return this.page.locator('//*[@class="grid__catalog"]/div[1]//*[@class="x-product-card__link x-product-card__hit-area"]');
    }

}

module.exports = ProductsListPage;