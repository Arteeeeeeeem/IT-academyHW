const Base = require('../base');

class NavBar extends Base {
    constructor() {
        super();
    }

    get pricingNavButton () {
        return cy.get('[href="/pricing"]');
    }
}

module.exports = new NavBar();