const BasePage = require('./basePage');
const Iframe = require('../helpers/iframe');

class reCAPTCHAPage extends BasePage {
    get reCAPTCHAText() {
        return cy.get('.auth-form__mediabox span')};

    get reCaptchaIframe() {
        return Iframe.xpath('//*[@title="reCAPTCHA"]')};

    pressCheckboxCAPTCHA () {
        this.reCaptchaIframe
            .find('.recaptcha-checkbox-spinner')
            .click({ force: true })};
}

module.exports = new reCAPTCHAPage()