const { spec, request  } = require('pactum');
const baseUrl = "https://reqres.in/api/users/2"

before( async () => {
    request.setDefaultTimeout(10000)
});
describe('Delete User Test Suit', () => {
    it('Delete User test', async () => {

        await spec()
        .delete(baseUrl)
        .expectStatus(204)
        .inspect()

    });
});