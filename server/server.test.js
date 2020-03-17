// const supertest = require('supertest');
const express = require('express');
const server = require('./index.js');
const axios = require('axios');
// const app = express();
const polyfill = require('babel-polyfill');
const request = require('supertest');



describe('server tests', () => {

  test('jest should work correctly', () => {
    expect(5 + 5).toBe(10);
  })

  test('responds to GET', done => {
    // Sends GET Request to /test endpoint
    return request(server)
   .get('/carousels/:id')
   .then(response => {
     expect(response.statusCode).toBe(200);
     done();
   });

    // expect(typeof response.body).toBe('object')

  });

  test('should respond with correct values', () => {
    return request(server)
      .get('/carousels/:id')
      .expect(200)
      .expect(res => {
        const data = res.body.data[0];
        console.log(data);
        expect(data.id).toEqual(expect.any(Number));
        expect(data.id).toBeGreaterThanOrEqual(1);
        expect(data.id).toBeLessThanOrEqual(100);

        expect(data.server_description).toEqual(expect.any(String));

        expect(data.images[0]).toEqual(expect.any(String));
      });
  });



})



// const supertest = require('supertest');
// const serverIndex= require('./index.js');
// // const app = require('./index.js');
// // const request = require(supertest)(app);

// describe('jest test client', () => {

//   it('Testing to see if Jest works', () => {
//     expect(1).toBe(2)
//   })
//   // test('should use GET and get a response', async done => {
//   //   // Sends GET Request to /test endpoint
//   //   const res = await request.get('/')
//   //   expect(response.status).toBe(200)
//   //   // expect(response.body.id).toBe(12)
//   //   done()
//   // });

//   // test('jest should work correctly', () => {
//   //   expect(5 + 5).toBe(10);
//   // });

// });

