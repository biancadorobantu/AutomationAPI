const { spec, request  } = require('pactum');
const baseUrl = "https://reqres.in/api/register"

before( async () => {
    request.setDefaultTimeout(10000)
});
describe('Post Register Successful Suit', () => {
    it('Post  Register Successful test', async () => {

        const requestBody = {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        };

        await spec()
        .post(baseUrl)
        .withBody(requestBody)
        .withHeaders('Content-Type', 'application/json')
        .expectStatus(200)
        .inspect()

    });
});

    describe('Post Register Unsuccessful Suit', () => {
        it('Post  Register Unsuccessful test', async () => {
    
            const requestBody = {
                "email": "eve.holt@reqres.in"
            };
    
            await spec()
            .post(baseUrl)
            .withBody(requestBody)
            .withHeaders('Content-Type', 'application/json')
            .expectStatus(400)
    
        });
});