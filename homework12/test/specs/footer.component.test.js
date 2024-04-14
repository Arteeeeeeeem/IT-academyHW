const FooterComponent = require('../components/footer.component');
const GettingStartedPage = require('../pageobjects/gettingStarted.page');

describe('Footer component tests', () => {
    before('Open Getting Started page', async () => {
        await browser.maximizeWindow();
        await GettingStartedPage.open();
    });

    it('Footer should have the Logo img. Save a screenshot of footer Logo to ../../screenshots', async () => {
        const footerLogoImg = await FooterComponent.footerLogoImg;
        await footerLogoImg.scrollIntoView();

        await expect(footerLogoImg).toBeDisplayedInViewport();
        await footerLogoImg.saveScreenshot('./screenshots/footerLogo.png');
    });

    it('Logo link should have attribute href="https://openjsf.org/"', async () => {
        const footerLogoLink = await FooterComponent.footerLogoLink;
        const href = await footerLogoLink.getAttribute('href');

        await expect(href).toBe('https://openjsf.org/');
    });

    it('Logo link should have attribute target="_blank"', async () => {
        const footerLogoLink = await FooterComponent.footerLogoLink;
        const target = await footerLogoLink.getAttribute('target');

        await expect(target).toBe('_blank');
    });
});