const CommunityPage = require('../pageobjects/community.page');
const NavigationComponent = require('../components/navigation.component');
const GettingStartedPage = require('../pageobjects/gettingStarted.page');

describe('Navigation component tests', () => {
    before('Open Getting Started page', async () => {
        await browser.maximizeWindow();
    });

    it('Should visit /team page by clicking "Team" menu link from Community Page', async () => {
        await CommunityPage.open();
        const link = await NavigationComponent.allMenuItems[2];
        const url = await NavigationComponent.visitMenuItem(link);

        expect(url).toContain('/team');
    });

    it('Should visit /options page by clicking subMenuItem "Options" from Getting Started Page', async () => {
        const mainMenuItem = $('//a[text()="Configuration"]');
        const subMenuItem = $('//a[text()="Options"]');
        await GettingStartedPage.open();
        await NavigationComponent.openSubMenu(mainMenuItem);
        const url = await NavigationComponent.visitMenuItem(subMenuItem);

        expect(url).toContain('/options');
    });
});
