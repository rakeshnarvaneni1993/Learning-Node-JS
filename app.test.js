var app = require('./app').app;
const request = require('supertest');


describe('Checking the return status', () => {
	it('Should return 200 response', (done) => {
	 request(app)
	  .get('/')
	  .expect(200)
	  .end(done);
})
});

describe('Checking of the template returned has all the coin names', () => {
	it('Should return Litecoin in response', (done) => {
	 request(app)
	  .get('/')
	  .expect(200)
	  .expect((res) => {
	  	expect(res.res.text).toMatch('Litecoin')
	  })
	  .end(done);
	}),
	it('Should return Bitcoin in response', (done) => {
	 request(app)
	  .get('/')
	  .expect(200)
	  .expect((res) => {
	  	expect(res.res.text).toMatch('Bitcoin')
	  })
	  .end(done);
	})
});
