const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/carousels';
mongoose.connect(dbURI, {
  useNewUrlParser: true, useUnifiedTopology: true
});
const db = mongoose.connection;

// db.on('connected', function() {
//   console.log('Mongoose default connect open to ' + dbURI);
// });

// // If the connection throws an error
// db.on('error', function(err) {
//   console.log('Mongoose default connect error: ' + err);
// });


// // When the connection is disconnected
// db.on('disconnected', function() {
//   console.log('Mongoose default connect disconnected');
// });


 module.exports = db;