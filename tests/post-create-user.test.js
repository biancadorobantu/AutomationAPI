const { spec, request  } = require('pactum');
const baseUrl = "https://reqres.in/api/users"

before( async () => {
    request.setDefaultTimeout(10000)
});
describe('Post Create User Suit', () => {
    it('Post Create User test', async () => {

        const requestBody = {
           name: "Bianca",
           job: "QA Engineer",
        };

        await spec()
        .post(baseUrl)
        .withBody(requestBody)
        .withHeaders('Content-Type', 'application/json')
        .expectStatus(201)
        .inspect()

    });
});