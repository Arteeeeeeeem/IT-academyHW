const BasePage = require('./basePage')

class ComparePage extends BasePage {
    get prodCompare() {
        return cy.xpath('//span[@class="product-summary__caption"]')
    }
}

module.exports = new ComparePage()