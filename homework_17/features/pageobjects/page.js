const constants = require("../constants");
module.exports = class Page {

    get buttonScrollBackVisible() {return $(".backToTopButtonShow_ssHd");}
    get buttonScrollBackHidden() {return $(".backToTopButton_RiI4");}
    get pageHeader() {return $("h1");}
    get breadcrumbsLinks(){return $$(".breadcrumbs__link");}
    getPageTitle(page) {return constants.PAGE_TITLE[page];}

    open (path) {
        return browser.url(`https://webdriver.io/${path}`);
    }
};