const BasePage = require('./basePage')

class ArticlePage extends BasePage {
    reaction(name) {
        return cy.xpath(`//div[@data-reaction="${name}"]`)
    }

    reactionsCounter(name) {
        return this.reaction(name).find('.st-count')
    }

    leaveReaction(name) {
        return this.reaction(name).click()
    }
}

module.exports = new ArticlePage()