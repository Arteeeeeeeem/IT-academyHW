const footer = require('../pageobjects/components/footer')
const mainPage = require('../pageobjects/mainPage')
const AdBlock = require('../helpers/adblocks')
const BasePage = require('../pageobjects/basePage')
const basePage = new BasePage()

beforeEach(() => {
    AdBlock.blockSafe()
    AdBlock.blockGoogle()
    mainPage.navigate('https://www.onliner.by/')
})

describe('Checking links FooterBar', () => {
    ;[  ['О компании', 'https://blog.onliner.by/about'],
        ['Контакты редакции', 'https://people.onliner.by/contacts'],
        ['Реклама', 'https://b2breg.onliner.by/advertising'],
        ['Тарифы', 'https://docs.google.com/spreadsheets/d/1SGFaTkV_Ru4vI29ml9yvR-dMz9rOl7DVVpKk64w5lqM/edit'],
        ['Вакансии', 'https://blog.onliner.by/vacancy'],
        ['Манифест', 'https://blog.onliner.by/manifest'],
        ['Пользовательское соглашение', 'https://blog.onliner.by/siterules'],
        ['Публичные договоры', 'https://blog.onliner.by/publichnye-dogovory'],
        ['Политика обработки персональных данных', 'https://blog.onliner.by/politika-konfidencialnosti'],
        ['Поддержка пользователей', 'https://support.onliner.by'],
        ['Правила возврата', 'https://blog.onliner.by/pravila-vozvrata-tovarov-i-deneg'],
    ]
        .forEach(([footerText, expectedURL]) => {
            it(`Press '${footerText}' links to ${expectedURL}`, () => {
                footer.linksFooterBar(footerText)
                basePage.currentURL.should('equal', expectedURL)
            })
        })
})