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
