const Page = require("./page");

class CommunityPage extends Page {

    open () {
        return super.open("community/support");
    }
}

module.exports = new CommunityPage();