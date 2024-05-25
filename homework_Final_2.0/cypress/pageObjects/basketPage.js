const BasePage = require('./basePage')

class BasketPage extends BasePage {
    get namePproduct() {
        return cy.get('.cart-form__offers-item_secondary a.cart-form__link')
    }
}

module.exports = new BasketPage()