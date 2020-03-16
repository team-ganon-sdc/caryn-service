const db = require('./index.js');
var Carousel = require('./models/Carousel.js');

var data = require('./seed_data.js');
const imagesData = require('./seed_data');



// findAll retrieves all appimages data
function findAll(callback) {
  Carousel.find({}, callback);
}

// findOne will retrieve the appimage associated with the given id
function findOne(id, callback) {
  Carousel.find({ id: id }, callback);
}

// insertOne inserts one appImages schema into db
function insertOne(schema, callback) {
  Carousel.create(schema, callback);
}


var seedDb = function (data) {
  Carousel.Carousel.insertMany(data, (err, docs) => {
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


