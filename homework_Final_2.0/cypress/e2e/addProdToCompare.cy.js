const header = require('../pageobjects/components/header')
const mainPage = require('../pageobjects/mainPage')
const foundProduct = require('../pageObjects/foundProductPage')
const comparePage = require('../pageobjects/comparePage')
const AdBlock = require('../helpers/adblocks')

beforeEach(() => {
    AdBlock.blockSafe()
    AdBlock.blockGoogle()
})
describe('Add multiple products and compare', () => {
    ;[['Apple iPhone 11', 'Apple iPhone 13']]

        .forEach((comparableProduct) => {
        it(`should Compare Products`, () => {
            mainPage.navigate('https://www.onliner.by/')
            const productTitle = comparableProduct.length - 1
            comparableProduct.forEach((comparableProduct, index) => {
                header.search(comparableProduct)
                foundProduct.addToCompare()
                foundProduct.pressCloseSearchBtn()

                if (index !== productTitle) {
                    foundProduct.clearSearchField()
                }
            })

            foundProduct.navigateToCompare()
            comparableProduct.forEach((comparableProduct, index) => {
                comparePage.prodCompare.eq(index).contains(comparableProduct)
            })
        })
    })
})