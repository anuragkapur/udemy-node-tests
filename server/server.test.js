const expect = require('expect');
const request = require('supertest');
const app = require('./server').app;

it('should get users and the response should contain expected user in users array', (done) => {
  request(app)
    .get('/users')
    .expect(200)
    .expect((response) => {
      expect(response.body).toInclude({
        name: 'Anurag Kapur',
        location: 'London'
      })
    })
    .end(done);
});