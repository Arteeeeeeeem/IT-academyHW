const Base = require('../helpers/base');

class ProductPage extends Base {
    constructor(page) {
        super(page);
    }
    get characteristicsProduct() {
        return this.page.locator('//*[@id="reviews-and-questions"]/div[3]/div/div[1]');
    }

    get nameProduct() {
        return this.page.locator('//*[@class="_modelName_1lw0e_21"]');
    }

    get discountProduct() {
        return this.page.locator('//*[@id="vue-root"]/div/main/div/div[3]/div[2]/div/div[1]/div[2]/div/div[1]/div[1]/div/div/div/div/span/span');
    }


}

module.exports = ProductPage;