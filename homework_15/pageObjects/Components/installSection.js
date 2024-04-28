const Base = require('../base');

class InstallSection extends Base {
    constructor(page) {
        super(page);
    }

    get getPageTitle() {
        return this.page.locator('//*[h1]');
    }
}

module.exports = InstallSection;