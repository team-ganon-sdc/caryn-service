var data = require('./seed_data.js');
const imagesData = require('./seed_data');
var mongoose = require('mongoose');
var Schemas = require('./database/models/Carousel.js');

mongoose.connect('mongodb://localhost/carousel');


var seedDb = function (data) {
  Schemas.AppImagesModel.insertMany(data, (err, docs) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Done');
  });
};


seedDb(data);


// , function(){

//   // load mongood file
//   seeder.loadModels([
//     'database/models/schema.js'
//   ])

//   // clear specified collections
//   seeder.clearModels(['Schema'], function(){
//     seeder.populateModels(data, function() {
//       seeder.disconnect();
//     });
//   });

// });


