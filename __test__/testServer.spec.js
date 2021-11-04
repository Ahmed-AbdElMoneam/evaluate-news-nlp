import 'babel-polyfill'

/*const app = require('../src/server/index')
const request = require("supertest");
const httpMocks = require('node-mocks-http');

describe('GET /user', function() {
    it('responds with json', function(done) {
      request(app)
        .post('/result')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});*/

const request = require('supertest')
const app = require('../src/server/index')
describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app).post('/result')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('post')
    //done()
  })
})

/*describe('Test: POST /analyze', () => {
    it('gets a valid URL and should respond with 200 from the API', async done => {
        const req = httpMocks.createRequest({
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
                text: "https://www.marca.com/en/football/real-madrid/2021/11/03/6183014de2704e9c908b45ef.html" 
            })
        });
        const res = httpMocks.createResponse();
        expect(res.statusCode).toBe(200);
        
        done();
    });
});*/
