class ElementUtil{

    async doClick(element) {
        await element.waitForDisplayed();
        await element.click();
    }

    doGetText(element) {
        element.waitForDisplayed();
        return element.getText();
    }

}

module.exports = new ElementUtil();