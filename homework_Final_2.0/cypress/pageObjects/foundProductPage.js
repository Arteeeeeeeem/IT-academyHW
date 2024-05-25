const BasePage = require('./basePage')
const Iframe = require('../helpers/iframe')

class CatalogSearchPage extends BasePage {

    get iframeSearch() {
        return Iframe.xpath('//iframe[@class="modal-iframe"]')
    }

    get checkBoxes() {
        return this.iframeSearch.xpath('//input[@class="i-checkbox__real"]')
    }

    get searchFieldInIframe() {
        return this.iframeSearch.xpath('//*[@class="search__input"]')
    }

    get compareButton() {
        return this.iframeSearch.xpath('//span[@data-bind="html: $root.text"]'
        )
    }

    get closeSearchBtn() {
        return this.iframeSearch.xpath('//*[@class="search__close"]')
    }

    get resultItems() {
        return this.iframeSearch.find('.result__item')
    }

    addFirst() {
        this.resultItems.first().find('.product__title a').first().click()
    }

    addToCompare() {
        this.checkBoxes.first().click({ force: true })
    }

    navigateToCompare() {
        this.compareButton.click()
    }

    clearSearchField() {
        this.searchFieldInIframe.clear({ force: true })
    }

    pressCloseSearchBtn() {
        this.closeSearchBtn.wait(2000).click()
    }
}

module.exports = new CatalogSearchPage()