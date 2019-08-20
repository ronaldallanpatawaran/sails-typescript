const supertest = require('supertest')
declare var sails: any;

describe('Authentication Controller', () => {
  let correctToken = ''
  const route = '/authentication-service'
	describe('POST ' + route, () => {
    const route = '/authentication-service'
		it('should response 200 OK', (done) => {
      supertest(sails.hooks.http.app)
      .post(route)
      .send({ userName: 'c7049f2b93f0363a6b1b5f2a4e80fd48da5b8d9b', passWord: '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8' })
      .expect(200)
      .end( (err, res) => {
        if (err) {
          throw err;
        }
        correctToken = res.body.data.token
        return done()
      })
    })
    it('should response 400 Bad Request if there is no userName or passWord', (done) => {
      supertest(sails.hooks.http.app)
      .post(route)
      .expect(400)
      .end( (err, res) => {
        if (err) {
          throw err;
        }
        return done()
      })
    })
	})
  describe('GET ' + route, () => {
    it('should response 200 OK', (done) => {
      supertest(sails.hooks.http.app)
      .get('/authentication-service')
      .set('Authorization', 'Bearer ' + correctToken)
      .expect(200)
      .end( (err, res) => {
        if (err) {
          console.log(JSON.stringify(res.body))
          throw err;
        }
        return done()
      })
    })
    it('should response 400 Bad Request if the token is invalid or expired', (done) => {
      const wrongToken = 'token' as string
      supertest(sails.hooks.http.app)
      .get('/authentication-service')
      .set('Authorization', 'Bearer ' + wrongToken)
      .expect(400)
      .end( (err, res) => {
        if (err) {
          console.log(JSON.stringify(res.body))
          throw err;
        }
        return done()
      })
    })
  })
})