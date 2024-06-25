const {test, expect} = require("@playwright/test");
const Base = require('../helpers/base');
const Header = require('../pageObjects/headerPage');
const LoginPage = require('../pageObjects/loginPage');
const MainPage = require('../pageObjects/mainPage');


test.describe('testing login', () => {
    let base;
    let header;
    let logninPage;
    let mainPage;
    test.beforeEach(async ({page}) => {
        base = new Base(page);
        header = new Header(page);
        logninPage = new LoginPage(page);
        mainPage = new MainPage(page);
        await base.navigate('https://www.lamoda.by');
        await mainPage.click(header.loginBtn);
    });

    test('check if you can sign up for a google social account',
        async ({page}) => {
        await logninPage.hoverOn(logninPage.loginBySocialLink);
        await expect(logninPage.googleAuthBtn).toBeEnabled();
    });

    test('check if an error appears when logging in with an invalid e-mail',
        async ({page}) => {
        await logninPage.confirmEnteredText(logninPage.loginField, 'gmail.com');
        await expect(logninPage.massageInvalidEmail).toHaveText('Пожалуйста, проверьте, правильно ли указан адрес');
    });

    test('check the appearance of the form for password recovery when logging in',
        async ({page}) => {
        await logninPage.click(logninPage.recoveryPassLink);
        await expect(logninPage.recoveryPassForm).toBeEnabled();
    });

})