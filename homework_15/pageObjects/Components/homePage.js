const Base = require('../base');

class HomePage extends Base {
    constructor(page) {
        super(page);
    }

    get getStartedButton() {
        return this.page.locator('//*[@class="getStarted_Sjon"]');
    }

    get homePageCoProjectsLogosRoll() {
        return this.page.locator('//*[@class="logosList_zAAF"]/li')
    }
}

module.exports = HomePage;