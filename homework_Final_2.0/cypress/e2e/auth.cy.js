const mainPage = require('../pageobjects/mainPage')
const header = require('../pageobjects/components/header')
const authPage = require('../pageObjects/authPage')
const reCAPTCHA = require('../pageObjects/reCAPTCHAPage')
const AdBlock = require('../helpers/adblocks')

beforeEach(() => {
    AdBlock.blockSafe()
    mainPage.navigate('https://www.onliner.by/')});

describe('Authorization', () => {
    it(`To enter without a name`, () => {
        header.navAuthPage()
        authPage.userPass('12345678')
        authPage.alertNameText.contains("Укажите ник или e-mail") });

    it(`To enter without a password`, () => {
        header.navAuthPage()
        authPage.userName('Artem')
        authPage.alertNameText.contains("Укажите пароль") });

    it('reСAPTCHA will appear after authorization', () => {
        header.navAuthPage()
        authPage.login('Artem', '12345678')
        reCAPTCHA.reCAPTCHAText.should('have.text', "Давайте проверим, вы робот или нет")
        reCAPTCHA.pressCheckboxCAPTCHA() })

})