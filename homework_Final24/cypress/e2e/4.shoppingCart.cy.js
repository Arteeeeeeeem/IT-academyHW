const mainPage = require('../pageobjects/mainPage')
const ProductPage = require('../pageobjects/productPage')

const productPage = new ProductPage()
const searchProductsResultPage = require('../pageobjects/searchProductsResultPage')
const AdBlock = require('../helpers/adblocks')
const header = require('../pageobjects/components/header')
const offersPage = require('../pageobjects/offersPage')
const shoppingCartPage = require('../pageobjects/shoppingCartPage')

beforeEach(() => {
  AdBlock.blockSafe()
  AdBlock.blockGoogle()
  mainPage.navigate('https://www.onliner.by/')
})

describe('Shopping cart', () => {
  ;[
    ['Apple iPhone 15', 'HONOR X9b'],
    ['Ricos Illusion S400', 'Microlife BP'],
  ].forEach((products) => {
    it(`Check adding to cart ${products}`, () => {
      products.forEach((product) => {
        header.search(product)
        searchProductsResultPage.navigateToFirst()
        productPage.navigateToOffers()
        offersPage.sortPriceAscending()
        offersPage.addTopOfferToCart()
        // offersPage.confirmContinueShoppingWithPopupBanner()
      })
      header.navigateToCart()
      products.reverse().forEach((product, index) => {
        shoppingCartPage.productTitles.eq(index).contains(product)
      })
    })
  })
})