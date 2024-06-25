const Base = require('../helpers/base');

class HeaderPage extends Base {
    constructor(page) {
        super(page);
    }

    get headerLogo() {
        return this.page.locator('//*[@aria-label="Главная"]');
    }

    get CartShopBtn() {
        return this.page.locator('//*[@class="_text_85qsb_14"]');
    }

    get searchBtn() {
        return this.page.locator('//*[@class="_root_1su1z_2"]/*[@type="button"]');
    }

    get saleBtn() {
        return this.page.locator('//*[text()=" Sale%"]');
    }

    get loginBtn() {
        return this.page.locator('//*[text()="Войти"]');
    }

    async searchProduct(text) {
        await this.searchField.fill(text);
        await this.click(this.searchBtn);
    }
    get searchField() {
        return this.page.locator('//*[@placeholder="Поиск"]');
    }

    get authenticProductsBtn() {
        return this.page.locator('//*[text()="Подлинные товары"]');
    }

    get authenticProductsPopup() {
        return this.page.locator('//*[@id="vue-root"]/div/header/div[1]/div/div[2]/div[2]/a/div/p');
    }


}

module.exports = HeaderPage;