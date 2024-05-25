const mainPage = require('../pageobjects/mainPage')
const articlePage = require('../pageObjects/articlePage')
const AdBlock = require('../helpers/adblocks')


beforeEach(() => {
    AdBlock.blockSafe()
    AdBlock.blockGoogle()
    mainPage.navigate('https://www.onliner.by/')
})

describe('Like dislike article', () => {
    ;['astonished', 'heart_eyes', 'laughing', 'slight_smile', 'sob',]
        .forEach((face) => {
        it(`Check Like dislike article on press smiley face`, () => {
            mainPage.navigateToNews()

            let counter = 0
            articlePage
                .reactionsCounter(face)
                .invoke('text')
                .then((text) => {
                    counter = Number(text)
                })

            articlePage.leaveReaction(face)
            articlePage
                .reactionsCounter(face)
                .invoke('text')
                .then((text) => {
                    const newCounter = Number(text)
                    expect(newCounter).equals(counter + 1)
                })
        })
    })
})