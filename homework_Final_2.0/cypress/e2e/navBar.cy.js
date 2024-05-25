const header = require('../pageobjects/components/header')
const mainPage = require('../pageobjects/mainPage')
const AdBlock = require('../helpers/adblocks')
const BasePage = require('../pageobjects/basePage')
const basePage = new BasePage()

beforeEach(() => {
    AdBlock.blockSafe()
    AdBlock.blockGoogle()
    mainPage.navigate('https://www.onliner.by/')
})

describe('check links NavBar', () => {
    ;[['Каталог', 'https://catalog.onliner.by/'],
        ['Новости', 'https://www.onliner.by/'],
        ['Автобарахолка', 'https://ab.onliner.by/'],
        ['Дома и квартиры', 'https://r.onliner.by/pk/'],
        ['Услуги', 'https://s.onliner.by/tasks'],
        ['Барахолка', 'https://baraholka.onliner.by/'],
        ['Форум', 'https://forum.onliner.by/']]

        .forEach(([navigationText, expectedURL]) => {
        it(`Press '${navigationText}' links to ${expectedURL}`, () => {
            header.linksNavBar(navigationText)
            basePage.currentURL.should('equal', expectedURL)
        })
    })
})