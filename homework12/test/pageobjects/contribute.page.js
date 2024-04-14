const Page = require('./page');

class ContributePage extends Page {

    open(){return super.open('docs/contribute');}
}

module.exports = new ContributePage();