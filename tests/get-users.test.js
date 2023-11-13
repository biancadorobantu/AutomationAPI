const { spec, request } = require("pactum");
const baseUrl = "https://reqres.in/api";
const getUsersSchema = require('../data/response/get-list-users-schema.json');

describe('GET Users Test suite', () => {
  before(async () => {
    request.setDefaultTimeout(10000);

    const UserId = 2;
  });

  it('Get list of users', async () => {
    await spec()
      .get(baseUrl + "/users?page=2")
      .expectStatus(200)
      .expectJsonSchema(getUsersSchema);
  });

  it('Get single user test', async () => {
    await spec()
    .get(baseUrl + "/users/2")
    .expectStatus(200)
   // .expectBodyContains(BodyUserId2);

    })
  });
