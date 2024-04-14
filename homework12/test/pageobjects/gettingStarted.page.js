const Page = require('./page');
const constants = require('../../constants');

class GettingStartedPage extends Page {

    open () {
        return super.open(constants.GETTING_STARTED_PAGE_URL);
    }

    get alertInfoBlock() {return $('.alert--info');}
}

module.exports = new GettingStartedPage();