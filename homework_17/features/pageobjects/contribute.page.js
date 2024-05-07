const Page = require("./page");
const constants = require("../constants");

class ContributePage extends Page {

    open(){return super.open("docs/contribute");}
    get pageTitle() {return constants.CONTRIBUTE_PAGE_TITLE;}
}

module.exports = new ContributePage();