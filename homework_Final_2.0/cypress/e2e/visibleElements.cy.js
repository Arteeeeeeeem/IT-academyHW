const mainPage = require('../pageobjects/mainPage')
const AdBlock = require('../helpers/adblocks')


beforeEach(() => {
    AdBlock.blockSafe()
    mainPage.navigate('https://www.onliner.by/')});

it('check if catalog block exists', () => {
    cy.visit('https://www.onliner.by/');
    cy.get('[id=onliner-catalog-purchases]').should('be.visible');
});

it('check if footer exists', () => {
    cy.visit('https://www.onliner.by/');
    cy.get('[class=footer-style]').should('be.visible');
});

it('check if logo ONLINER exists', () => {
    cy.visit('https://www.onliner.by/');
    cy.get('[class=b-top-logo]').should('be.visible');
});
