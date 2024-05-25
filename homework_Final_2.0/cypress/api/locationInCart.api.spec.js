const validator = require('jsonschema')
const locationSchema = require('./data/locationCart.json')

const location_API = 'https://cart.onliner.by/sdapi/api/cart.api/positions'

describe('Location in cart API', () => {
        it(`GET validate response status'`, () => {
            cy.request(location_API, { query: '?town_id=17030&v=0.21173783023734072'}).then((response) => {
                expect(response.status).to.equal(200)
            })
        })
        it(`GET validate response schema'`, () => {
            cy.request(location_API, { query: '?town_id=17030&v=0.21173783023734072'}).then((response) => {
                const result = validator.validate(response.data, locationSchema)
                expect(result.valid).to.equal(true)
            })
        })
})