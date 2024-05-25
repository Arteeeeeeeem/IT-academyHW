const validator = require('jsonschema')
const kurs_in_Realt_Schema = require('./data/kursInRealt.json')

const kurs_in_Realt_API = 'https://realt.onliner.by/sdapi/kurs/api/bestrate?currency=USD&type=nbrb\n'

describe('API Kurs in realt page', () => {
    ;['BYN', 'RUB'].forEach((currency) => {
        it(`GET validate response status ${currency} is OK`, () => {
            cy.request(kurs_in_Realt_API, { currency }).then((response) => {
                expect(response.status).to.equal(200)
            })
        })
        it(`GET validate response schema for ${currency}`, () => {
            cy.request(kurs_in_Realt_API, { currency }).then((response) => {
                const result = validator.validate(response.data, kurs_in_Realt_Schema)
                expect(result.valid).to.equal(true)
            })
        })
    })
})