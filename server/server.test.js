const supertest = require('supertest');
const app = require('./index.js');
const request = supertest(app);

describe('jest test client', () => {

  it('Gets the test endpoint', async done => {
    // Sends GET Request to /test endpoint
    const res = await request.get('/')
    expect(response.status).toBe(200)
    expect(response.body["what time is it?"]).toBe("time 4 broccoli")
    done()
  });

  test('jest should work correctly', () => {
    expect(5 + 5).toBe(10);
  });

});

