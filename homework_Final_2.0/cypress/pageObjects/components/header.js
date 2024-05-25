class Header {
    get pressBtnAuth() {
        return cy.xpath('//div[@class="auth-bar__item auth-bar__item--text"]')
    }

    navAuthPage() {
        this.pressBtnAuth.click()
    }

    get searchFieldOnTheMainPage() {
        return cy.xpath('//input[@class="fast-search__input"]')
    }

    search(item) {
        this.searchFieldOnTheMainPage.wait(2000).click()
        this.searchFieldOnTheMainPage.type(item, { force: true })
    }

    get cart() {
        return cy.get('a.auth-bar__item--cart')
    }

    navigateToCart() {
        this.cart.click({ force: true })
    }

    navigationButton(text) {
        return cy.xpath(
            `//*[@class="b-main-navigation__text" and text()="${text}"]`)
    }

    linksNavBar(text) {
        return this.navigationButton(text).click()
    }

    resultOfTheSearch(){
        return cy.get('.result__item result__item_category');
    };

}

module.exports = new Header()