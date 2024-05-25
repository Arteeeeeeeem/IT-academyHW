const validator = require('jsonschema')
const newsCatalogSchema = require('./data/brandsCatalog.json')

const catalog_API = 'https://catalog.onliner.by/sdapi/catalog.api/navigation/brands/9741/groups'

describe('API LG brand catalog', () => {
        it(`GET catalog for LG brand`, () => {
            cy.request(catalog_API).then((response) => {
                expect(response.status).to.equal(200)
            })
        })
        it(`GET validate response schema`, () => {
            cy.request(catalog_API).then((response) => {
                const result = validator.validate(response.data, newsCatalogSchema)
                expect(result.valid).to.equal(true)
            })
        })
})