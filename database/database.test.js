const mongoose = require('mongoose');
const Schema = require('./models/Carousel.js');
var data = require('./seed_data.js');
const seedData = require('./seed_data');


describe('database tests', () => {

  test('jest should work correctly', () => {
    expect(true).toBe(true);
  });

  it('will check the matchers and pass', () => {

    expect(seedData[0]).toMatchSnapshot({
      id: expect.any(Number),
      app_description: expect.any(String),
      images: expect.any(Array)
    });
  });

});




// describe('mongoDB database', () => {

//   test('the seed script adds to the database', done => {
//     // The seed file has 3 Schemas for id 1
//     // Needs to be changed if more data is added
//     Schema.find({ id: 2 }, (err, ids) => {
//       expect(ids.length).toBeGreaterThanOrEqual(0);
//       done();
//     });
//   });

//   test('seed data is array of objects', done => {
//     const seedData = require('./seed_data');
//     expect(typeof seedData.toBe('object');
//     done();
//   });

//   test('the schema should have the correct ids', done => {
//     Schema.findOne({ id: 9 }, (err, id) => {
//       expect(id).toEqual(
//         expect.objectContaining({
//           id: expect.any(Number),
//           app_description: expect.any(String),
//           images: expect.any(Array),
//         })
//       );
//       mongoose.connection.close();
//       done();
//     });
//   });

// });



// // describe('database tests', () => {

// //   test('the seed script adds to the database', done => {
// //     // The seed file has 3 Schemas for id 1
// //     // Needs to be changed if more data is added
// //     Schema.find({ id: 2 }, (err, ids) => {
// //       expect(id.length).toBeGreaterThanOrEqual(0);
// //       done();
// //     });
// //   });

// //   test('will check the snapshot and pass with correct types', () => {

// //     expect(seedData[9]).toMatchSnapshot({
// //       id: expect.any(Number),
// //       app_description: expect.any(String),
// //       images: expect.any(Array)
// //     });
// //   });


// //   it('will be able to find a specific id with .find()', () => {
// //     seedData.find({id: 99}, (err, id) => {
// //       expect(seedData[9].id).toEqual(99);
// //       done();
// //     })
// //   })


// //   test('the schema should have the correct ids', done => {
// //     Schema.findOne({ id: 1 }, (err, id => {
// //       expect(id).toEqual(
// //         expect.objectContaining({
// //           id: expect.any(String),
// //           app_description: expect.any(String),
// //           images: expect.any(Array)
// //         })
// //       );
// //       mongoose.connection.close();
// //       done();
// //     });
// //   });



// // });
