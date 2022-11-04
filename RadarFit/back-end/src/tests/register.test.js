const sinon = require('sinon');
const chai  = require('chai');
const chaiHttp = require('chai-http');
const app = require('../api/app');
const registerService = require('../services/registerService');
const ValidationError = require('../middlewares/ValidateError');

chai.use(chaiHttp);

const { expect } = chai;

const newUserMock = {
  name: "john Doe Does",
  email: "user@user.com",
  password: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJqb2huIERvZSBEb2VzIiwiZW1haWwiOiJ1c2VyQHVzZXIuY29tIiwicGFzc3dvcmQiOiJqb2huRG9lQDEyMyJ9LCJpYXQiOjE2NjUyNzMwOTN9.M-LGEZuafkBKJ8EgMoEl8ikDWd2r7KBJAVsml50s9hQ"
}

const bodyMockExists = {
  email: "trybe@trybe.com",
  password: "joseTrybe@123"
}


const bodyMock = {
  email: "user@user.com",
  password: "johnDoe@123"
}

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJqb2huIERvZSBEb2VzIiwiZW1haWwiOiJ1c2VyQHVzZXIuY29tIiwicGFzc3dvcmQiOiJqb2huRG9lQDEyMyJ9LCJpYXQiOjE2NjUyNzMwOTN9.M-LGEZuafkBKJ8EgMoEl8ikDWd2r7KBJAVsml50s9hQ"

describe('Register', () => {

  beforeEach(async () => {
    sinon.restore();
  });

  it('should return status 201', async () => {
    sinon.stub(registerService, "register")
      .resolves(newUserMock)

    const chaiHttpResponse = await chai.request(app)
      .post('/register')
      .send(bodyMock)

    expect(chaiHttpResponse.status).to.equal(201);
  })
  it('should return token', async () => {
    sinon.stub(registerService, "register")
      .resolves({ token })

    const chaiHttpResponse = await chai.request(app)
      .post('/register')
      .send(bodyMock)

    expect(chaiHttpResponse.body.token).to.equal(token);
  })
  it('should return status 401', async () => {
    sinon.stub(registerService, 'register').callsFake(() => {
      throw new ValidationError(401, 'All fields must be filled')
    })

    const chaiHttpResponse = await chai.request(app)
      .post('/register')
      .send(bodyMock)

    expect(chaiHttpResponse.status).to.equal(401);
  })
  it('should return status 400 case user already exists', async () => {
    sinon.stub(registerService, 'register').callsFake(() => {
      throw new ValidationError(400, 'User already exists')
    })

    const chaiHttpResponse = await chai.request(app)
      .post('/register')
      .send(bodyMockExists)

    expect(chaiHttpResponse.status).to.equal(400);
  })
})