const Base = require('../helpers/base');

class FooterPage extends Base {
    constructor(page) {
        super(page);
    }

    get subscrError() {
        return this.page.locator('//*[text()="Заполните электронную почту"]');
    }

    get boxAgreePersData() {
        return this.page.locator('//*[@class="x-checkbox__content"]');
    }

    get subscrBtn() {
        return this.page.locator('//*[@label="Подписаться"]');
    }

    get primeBrandsFooterBtn() {
        return this.page.locator('//*[@class="x-footer-seo-menu-tabs"]/*[text()="Премиум бренды"]');
    }

    get LagerfeldFooterBtn() {
        return this.page.locator('//*[@class="x-footer-seo-menu-tab-links"]//*[text()="Karl Lagerfeld"]');
    }
}

module.exports = FooterPage;