const Base = require('../base');

class NavBar extends Base {
    constructor(page) {
        super(page);
    }

    get languageDropDownList() {
        return this.page.locator('//*[contains(@class, "navbar__item dropdown")]');
    }

    get phytonLanguageButton() {
        return this.page.locator('//*[@href="/python/"]');
    }

    get docsButton() {
        return this.page.locator('//*[@class="navbar__items"]/*[text()="Docs"]');
    }

    get searchButton() {
        return this.page.locator('//*[@class="DocSearch-Button-Container"]');
    }
}

module.exports = NavBar;