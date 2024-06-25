const Base = require('../helpers/base');

class LoginPage extends Base {
    constructor(page) {
        super(page);
    }

    get loginField() {
        return this.page.locator('//*[@class="input-material__input-user-agent input-material__input"]');
    }

    get massageInvalidEmail() {
        return this.page.locator('//*[@class="input-material__validation-message"]');
    }

    get recoveryPassLink() {
        return this.page.locator('//*[text()="Я не помню пароль"]');
    }

    get recoveryPassForm() {
        return this.page.locator('//*[text()="Восстановление пароля"]');
    }

    get loginBySocialLink() {
        return this.page.locator('//*[text()="соцсети "]');
    }

    get googleAuthBtn() {
        return this.page.locator('//*[@class="_item_12oac_14 _item_gp_12oac_32"]');
    }

    async confirmEnteredText(element, text) {
        await element.fill(text);
        await this.page.keyboard.press('Backspace');
        await this.page.keyboard.press('Tab');
    }
}

module.exports = LoginPage;