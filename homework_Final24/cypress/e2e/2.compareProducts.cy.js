const mainPage = require('../pageobjects/mainPage')
const header = require('../pageobjects/components/header')
const searchProductsResultPage = require('../pageobjects/searchProductsResultPage')
const comparePage = require('../pageobjects/comparePage')
const AdBlock = require('../helpers/adblocks')

beforeEach(() => {
    AdBlock.blockSafe()
    AdBlock.blockGoogle()
})

describe('Add products to comparison', () => {
    ;[
        ['Apple iPhone 11', 'Apple iPhone 15']
        // ['Chiccolino Gold'],
        // ['Apple iPhone 15'],
    ].forEach((productModels) => {
        it(`should Compare Products : ${productModels}`, () => {
            mainPage.navigate('https://www.onliner.by/')

            const lastProductIndex = productModels.length - 1
            productModels.forEach((productModel, index) => {
                header.search(productModel)

                searchProductsResultPage.addToCompare()
                searchProductsResultPage.clickCloseSearchButton()


                if (index !== lastProductIndex) {
                    searchProductsResultPage.clearSearchField()
                }
            })

            searchProductsResultPage.navigateToCompare()
            productModels.forEach((productModel, index) => {
                comparePage.compareItem.eq(index).contains(productModel)
            })
        })
    })
})