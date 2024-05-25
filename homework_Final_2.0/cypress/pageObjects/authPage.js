const BasePage = require('./basePage')

class AuthPage extends BasePage {
    get nameField() {
        return cy.xpath('//*[@placeholder="Ник или e-mail"]')};

    get passField() {
        return cy.xpath('//*[@placeholder="Пароль"]')};

    get authBtn() {
        return cy.xpath('//*[@class="auth-button auth-button_primary auth-button_middle auth-form__button auth-form__button_width_full"]')};

    get alertAuth() {
        return cy.xpath('//*[contains(@class,"auth-form__description auth-form__description_error")]')};

    get alertNameText() {
        return cy.xpath('//*[contains(@class,"auth-form__description_extended-other")]')};

    get alertPassText() {
        return cy.xpath('//*[contains(@class,"auth-form__description_extended-other")]')};

    login(name, pass) {
        this.nameField.type(name)
        this.passField.type(pass)
        this.pressAuthBtn()};

    userName(name) {
        this.nameField.type(name)
        this.pressAuthBtn()};

    userPass(pass) {
        this.passField.type(pass)
        this.pressAuthBtn()};

    pressAuthBtn() {
        this.authBtn.click({ force: true })};
}
module.exports = new AuthPage()