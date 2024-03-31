const axios = require('axios');
const {Validator} = require('jsonschema');
const validator = new Validator();

const getAuthorsJsonSchema = require('../testData/getAuthors.v1.json')
const postAuthorsJsonSchema = require('../testData/postAuthors.v1.json')
const getAuthorsBookIdJsonSchema = require('../testData/getAuthorsBookId.v1.json')
const getAuthorsIdJsonSchema = require('../testData/getAuthorsId.v1.json')
const putAuthorsIdJsonSchema = require('../testData/putAuthorsId.v1.json')
const deleteAuthorsIdJsonSchema = require('../testData/deleteAuthorsId.v1.json')

const id = 1

describe('API tests for Author', function () {


    describe('API tests GET Authors', function () {
        let result;
        beforeAll(async () => {
            result = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Authors', {
                headers: {
                    "accept": "text/plain; v=1.0"
                }
            });
        })

        test('GET /api/v1/Authors should be status 200', async () => {
            expect(result.status).toEqual(200)
        })

        test('GET /api/v1/Authors should be valid jsonschema', async () => {
            const validationResult = await validator.validate(result.data, getAuthorsJsonSchema);
            expect(validationResult.valid).toEqual(true)
        })
    })


    describe('API tests POST Author', function () {
        let result;
        beforeAll(async () => {
            result = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Authors', {
                "id": 0,
                "idBook": 0,
                "firstName": "string",
                "lastName": "string"
            }, {
                headers: {
                    "accept": "text/plain; v=1.0",
                    "Content-Type": "application/json; v=1.0"
                }
            });
        })

        test('POST /api/v1/Authors should be status 200', async () => {
            expect(result.status).toEqual(200)
        })

        test('POST /api/v1/Authors should be valid jsonschema', async () => {
            const validationResult = await validator.validate(result.data, postAuthorsJsonSchema);
            expect(validationResult.valid).toEqual(true)
        })
    })


    describe('API tests GET books/idBook', function () {
        let result;
        beforeAll(async () => {
            result = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Authors', {
                params: {
                    idBook: '210'
                }
            });
        });

        test('GET /api/v1/Authors{idBook} should be status 200', async () => {
            expect(result.status).toEqual(200)
        })

        test('GET /api/v1/Authors{idBook} should be valid jsonschema', async () => {
            const validationResult = await validator.validate(result.data, getAuthorsBookIdJsonSchema);
            expect(validationResult.valid).toEqual(true)
        })
    })

    describe('API tests GET authors/id', function () {
        let result;
        beforeAll(async () => {
            result = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Authors', {
                params: {
                    id: '58'
                },
                headers: {
                    "accept": "text/plain; v=1.0"
                }
            });
        });

        test('GET /api/v1/Authors/{id} should be status 200', async () => {
            expect(result.status).toEqual(200)
        })

        test('GET /api/v1/Authors/{id} should be valid jsonschema', async () => {
            const validationResult = await validator.validate(result.data, getAuthorsIdJsonSchema);
            expect(validationResult.valid).toEqual(true)
        })
    })


    describe('API tests PUT authors/id', function () {
        let result;
        beforeAll(async () => {
            result = await axios.put(`https://fakerestapi.azurewebsites.net/api/v1/Authors/${id}`, {
                headers: {
                    "accept": "text/plain; v=1.0",
                    "Content-Type": "application/json; v=1.0"
                }})
        })

        test('PUT /api/v1/Authors/{id} should be status 200', async () => {
            expect(result.status).toEqual(200)
        })

        test('PUT /api/v1/Authors/{id} should be valid jsonschema', async () => {
            const validationResult = await validator.validate(result.data, putAuthorsIdJsonSchema);
            expect(validationResult.valid).toEqual(true)
        })
    })

    describe('API test DELETE authors/id', function (){
        let result;
        beforeAll(async () => {
            result = await axios.delete(`https://fakerestapi.azurewebsites.net/api/v1/Authors/${id}`, [{
                    headers: {
                        "accept": "*/*",
                    }}]
            );
        });
        test('DELETE /api/v1/Authors/{id} should be status 200', async () => {
            expect(result.status).toEqual(200)
        })
        test('GET /api/v1/Authors/{id} should be valid jsonschema', async () => {
            const validationResult = await validator.validate(result.data, deleteAuthorsIdJsonSchema);
            expect(validationResult.valid).toEqual(true)
        })
    })
})