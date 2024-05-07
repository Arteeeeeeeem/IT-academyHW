class NavigationComponent {

    async visitMenuLink (item){
        await browser.maximizeWindow();
        const menuLink = await $(`/*[@class="navbar__items"]/*[text()="${item}"]`);
        await menuLink.waitForDisplayed();
        await menuLink.click();
    }

}

module.exports = new NavigationComponent();