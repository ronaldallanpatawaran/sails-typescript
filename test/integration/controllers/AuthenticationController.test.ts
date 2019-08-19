const supertest = require('supertest')
declare var sails: any;

describe('Authentication Controller', () => {
	describe('POST /authentication-service/login', () => {
		it('should response 200', function (done) {
      supertest(sails.hooks.http.app)
      .post('/authentication-service/login')
      .expect(200, done)
    })
	})
})