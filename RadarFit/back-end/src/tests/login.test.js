const sinon = require('sinon');
const chai  = require('chai');
const chaiHttp = require('chai-http');
const app = require('../api/app');
const User = require('../database/models/users');
const loginService = require('../services/loginService');
const ValidationError = require('../middlewares/ValidateError');

chai.use(chaiHttp);

const { expect } = chai;

const userMock = {
    name: 'José Alexandre',
    email: 'trybe@trybe.com',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRyeWJlQHRyeWJlLmNvbSIsInBhc3N3b3JkIjoiam9zZVRyeWJlQDEyMyJ9.7Bdxgth2oFw7P37HHOg6cXjaTpatWCnj-ADiKHzdv6U',
  }


const bodyMock = {
  email: "trybe@trybe.com",
  password: "joseTrybe@123"
}

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9zw6kgQWxleGFuZHJlIiwiZW1haWwiOiJ0cnliZUB0cnliZS5jb20iLCJwYXNzd29yZCI6Impvc2VUcnliZUAxMjMifQ.liL45iUAlNqKNknjQ_sRbIWvMVOwecIt3033slBRzPs"

describe('Login', () => {

  beforeEach(async () => {
    sinon.restore();
  });

  it('should return status 200', async () => {
    sinon.stub(loginService, "login")
      .resolves(userMock)

    const chaiHttpResponse = await chai.request(app)
      .post('/login')
      .send(bodyMock)

    expect(chaiHttpResponse.status).to.equal(200);
  })
  it('should return token', async () => {
    sinon.stub(loginService, "login")
      .resolves({ token })

    const chaiHttpResponse = await chai.request(app)
      .post('/login')
      .send(bodyMock)

    expect(chaiHttpResponse.body.token).to.equal(token);
  })
  it('should return status 401', async () => {
    sinon.stub(loginService, 'login').callsFake(() => {
      throw new ValidationError(401, 'All fields must be filled')
    })

    const chaiHttpResponse = await chai.request(app)
      .post('/login')
      .send(bodyMock)

    expect(chaiHttpResponse.status).to.equal(401);
  })
  it('should return status 400 case password or email incorrect', async () => {
    sinon.stub(loginService, 'login').callsFake(() => {
      throw new ValidationError(400, 'Incorrect email or password')
    })

    const chaiHttpResponse = await chai.request(app)
      .post('/login')
      .send(bodyMock)

    expect(chaiHttpResponse.status).to.equal(400);
  })
})