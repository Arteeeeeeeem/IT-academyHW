const mainPage = require('../pageobjects/mainPage')
const ProductPage = require('../pageobjects/productPage')
const productPage = new ProductPage()
const foundProduct = require('../pageObjects/foundProductPage')
const AdBlock = require('../helpers/adblocks')
const header = require('../pageobjects/components/header')
const offersPage = require('../pageobjects/offersPage')
const shoppingCartPage = require('../pageObjects/basketPage')

beforeEach(() => {
  AdBlock.blockSafe()
  AdBlock.blockGoogle()
  mainPage.navigate('https://www.onliner.by/')
})

describe('Basket', () => {
  ;[['Apple iPhone 11']]
      .forEach((products) => {
    it(`Add product to basket`, () => {
      products.forEach((product) => {
        header.search(product)
        foundProduct.addFirst()
        productPage.navigateToOffers()
        offersPage.filterPriceDescending()
        offersPage.addTopOfferToCart()
      })
      header.navigateToCart()
      products.reverse().forEach((product, index) => {
        shoppingCartPage.namePproduct.eq(index).contains(product)
      })
    })
  })
})