const axios = require('axios');
const {Validator} = require('jsonschema');
const validate = new Validator()
const searchSchema = require('../schemas/bannerAPIschema.v1.json');

describe(`Banner api testing`, function() {
    let response;
    beforeAll(async () => {
        response = await axios.post('https://www.lamoda.by/api/v1/banner/get', {
            slot_id: "js_header_usp1"
        });
    });

    test(`should return status code 200`, async () => {
        expect(response.status).toBe(200);
    });

    test(`should be valid response body`, async () => {
        const result = validate.validate(response.data, searchSchema);
        expect(result.valid).toBe(true);
    });

})
