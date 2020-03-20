// const db = require('./index.js');
var model = require('./model.js');
var mongoose = require('mongoose');
var data = require('./seed_data.js');
const imagesData = require('./seed_data');
mongoose.connect('mongodb://database/googleplay');

// populate db
var seedDb = function (data) {
  model.Carousels.insertMany(data, (err, docs) => {
    if (err) {
      console.log(`Error populating db ${err}`);
      return;
    }
    console.log('Done populating db!');
  });
};


seedDb(data);


module.exports = seedDb;

