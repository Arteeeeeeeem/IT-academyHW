class Base {

    time = 10000;
    navigate (url) {
        cy.visit(url);
    }

    urlContain (url) {
        cy.url().should('include', url);
    }
}

module.exports = Base;