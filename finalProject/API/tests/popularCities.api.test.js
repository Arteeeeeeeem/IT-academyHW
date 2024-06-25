const axios = require('axios');
const {Validator} = require('jsonschema');
const validate = new Validator()
const searchSchema = require('../schemas/popularCitiesAPIschema.v1.json');

describe(`Popular cities api testing`, function() {
    let response;
    beforeAll(async () => {
        response = await axios.get('https://www.lamoda.by/api/v1/cities/popular');
    });

    test(`should return status code 200`, async () => {
        expect(response.status).toBe(200);
    });

    test(`should be valid response body`, async () => {
        const result = validate.validate(response.data, searchSchema);
        expect(result.valid).toBe(true);
    });

})
