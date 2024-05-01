/// <reference types="cypress"/>

const mainPage = require('../../pageObjects/mainPage');
const subscribePage = require('../../pageObjects/subscribePage');
const searchMode = require('../../pageObjects/searchMode');
const navBar = require('../../pageObjects/navBar');
const pricingPage = require('../../pageObjects/pricingPage');


describe('cypress.io website tests', function () {
  it('testing messages about incorrect email in subscribe', () => {
    cy.visit('https://www.cypress.io/');
    mainPage.subscribeToNewsButton.click();
    subscribePage.subscribeField.type('gmail.com');
    subscribePage.subscribeButton.click();
    subscribePage.subscribeErrorText.should("contain", 'Please enter a valid email address');
  })

  it('testing search result', () => {
    cy.visit('https://docs.cypress.io/guides/overview/why-cypress');
    searchMode.searchDoc('Cypress');
    searchMode.firstSearchResult.should("contain", 'Cypress');
  })

  it('testing search result contain link', () => {
    cy.visit('https://docs.cypress.io/guides/overview/why-cypress');
    searchMode.searchDoc('cucumber');
    searchMode.shouldFirstResultContainLink('/selenium-to-cypress#Migrating-test-cases-with-Cucumber');
  })

  it('testing the monthly Business price results', () => {
    cy.visit('https://www.cypress.io/');
    navBar.pricingNavButton.click();
    pricingPage.monthlyPriceButton.click();
    pricingPage.chooseNumOfTestResults(50);
    pricingPage.businessPrice.should("contain", '500');
  })
});