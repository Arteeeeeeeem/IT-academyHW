const ContributePage = require('../pageobjects/contribute .page');
const FooterComponent = require('../components/footer.component');
const constants = require('../../constants');


describe('Contribute page tests', () => {
    before('Open Contribute page', async () => {
        await browser.maximizeWindow();
        await ContributePage.open();
    });

    it(`Contribute page has title ${constants.CONTRIBUTE_PAGE_TITLE}`, async () => {
        const title = await browser.getTitle();

        expect(title).toEqual(constants.CONTRIBUTE_PAGE_TITLE);
    });

    it(`Contribute page has header ${constants.CONTRIBUTE_PAGE_HEADER}`, async () => {
        const header = await ContributePage.getText(ContributePage.pageHeader);

        expect(header).toEqual(constants.CONTRIBUTE_PAGE_HEADER);
    });

    it('Button ScrollBack should change a CSS Property visibility from "hidden" to "visible" after scroll up', async () => {
        await ContributePage.open();
        const buttonScrollBackHidden = await ContributePage.buttonScrollBackHidden;
        const visibilityHidden = await buttonScrollBackHidden.getCSSProperty('visibility');

        expect(visibilityHidden.value).toEqual('hidden');

        await FooterComponent.footer.scrollIntoView();
        await $('iframe').scrollIntoView();
        const buttonScrollBackVisible = await ContributePage.buttonScrollBackVisible;
        const visibilityVisible = await buttonScrollBackVisible.getCSSProperty('visibility');

        expect(visibilityVisible.value).toEqual('visible');
    });
});