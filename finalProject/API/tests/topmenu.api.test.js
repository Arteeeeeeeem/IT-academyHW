const axios = require('axios');
const {Validator} = require('jsonschema');
const validate = new Validator()
const searchSchema = require('../schemas/topMenuAPIschema.v1.json');

describe(`Top menu - api testing`, function() {
    describe(`Valid cases`, function () {
        let response;
        beforeAll(async () => {
            response = await axios.post('https://www.lamoda.by/api/v1/cms/topmenu_flexible', {
                aoid: "16733",
                gender: "men",
                platform: "desktop_site",
                version: "default"
            });
        });

        test(`should return status code 200`, async () => {
            expect(response.status).toBe(200);
        });

        test(`should be valid response body`, async () => {
            const result = validate.validate(response.data, searchSchema);
            expect(result.valid).toBe(true);
        });
    });

    describe('negative cases', () => {
        let response;
        beforeAll(async () => {
            try {
                response = await axios.post('https://www.lamoda.by/api/v1/cms/topmenu_flexible', {
                    aoid: "",
                    gender: "",
                    platform: "desktop_site",
                    version: "default"
                });
            } catch (err) {
                response = err;
            }
        });

        test(`should return 400 with empty query`, async () => {
            expect(response.response.status).toEqual(400);
        });

        test(`should return status message 'Request failed with status code 400'`, async () => {
            expect(response.message).toEqual('Request failed with status code 400');
        });
    });
});