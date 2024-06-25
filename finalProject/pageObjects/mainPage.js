const Base = require('../helpers/base');

class MainPage extends Base {
    constructor(page) {
        super(page);
    }

    get ProdPopularsSection() {
        return this.page.locator('//*[contains(@class, "swiper-slide _item_10bum_48 swiper-slide-visible")]');
    }
}

module.exports = MainPage;