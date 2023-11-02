const { spec, request  } = require('pactum');
const baseUrl = "https://reqres.in/api/users/2"

before( async () => {
    request.setDefaultTimeout(10000)
});
describe('Put Update User Suit', () => {
    it('Put Update User test', async () => {

        const requestBody = {
             "name": "morpheus",
             "job": "zion 11president"
            
        };

        await spec()
        .put(baseUrl)
        .withBody(requestBody)
        .withHeaders('Content-Type', 'application/json')
        .expectStatus(200)
        .inspect()

    });
});