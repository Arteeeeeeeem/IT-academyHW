const ElementUtil = require('../helpers/elementUtil');
const constants = require('../../constants');

module.exports = class Page {

    get buttonScrollBackVisible() {return $('.backToTopButtonShow_ssHd');}
    get buttonScrollBackHidden() {return $('.backToTopButton_RiI4');}
    get pageHeader() {return $('h1');}
    get breadcrumbsLinks(){return $$('.breadcrumbs__link');}

    open (path) {
        return browser.url(`https://webdriver.io/${path}`);
    }

    async click(element) {
        await ElementUtil.doClick(element);
    }

    getText(element) {
        return ElementUtil.doGetText(element);
    }

};