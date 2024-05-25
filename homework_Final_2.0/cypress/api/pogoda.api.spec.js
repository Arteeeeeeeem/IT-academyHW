const validator = require('jsonschema')
const pogodaSchema = require('./data/pogodaInRealtPage.json')

const pogodaRealt_API = 'https://realt.onliner.by/sdapi/pogoda/api/now'

describe('API Pogoda in realt page', () => {
    it('GET validate response status', () => {
        cy.request(pogodaRealt_API).then((response) => {
            expect(response.status).to.equal(200)
        })
    })
    it('GET validate response schema', () => {
        cy.request(pogodaRealt_API).then((response) => {
            const result = validator.validate(response.data, pogodaSchema)
            expect(result.valid).to.equal(true)
        })
    })
})