const { spec, request  } = require('pactum');
const baseUrl = "https://reqres.in/api";
//const getUsersList = require('../data/response/get-list-users-schema.json')

before( async () => {
    request.setDefaultTimeout(10000)
});

describe('GET Users list suit ', () => {
    it('Get Users test', async () => {
        await spec()
        .get(baseUrl+"/users?page=2")
        .expectStatus(200);
       // .expectJsonSchema(getUsersList);

    });
});
