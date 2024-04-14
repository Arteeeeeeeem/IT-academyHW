class NavigationComponent {

    get allMenuItems (){return $$('.menu__link');}

    async openSubMenu(item) {
        await item.waitForDisplayed();
        await item.click();
    }

    async visitMenuItem(item) {
        await item.waitForDisplayed();
        await item.click();
        return browser.getUrl();
    }
}

module.exports = new NavigationComponent();