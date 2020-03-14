const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3003;
const bodyParser = require('body-parser');
// const {AppImagesModel, AppImagesSchema, findOne, findAll, insertOne} = require('../database/models/Carousel.js');

const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/carousel';
var router = express.Router();



// open the default mongo connection
// mongoose.connect(mongoDB, function(err, success) {
//   if (err) {
//     // console.log(err, 'error connecting to mongoDB');
//   } else {
//     // console.log("connected to mongoDB");
//   }
// });


// mongoose.connect(mongoDB, {useMongoClient: true}, function(err, success) {
//   if (err) {

//   }
// }


app.use(bodyParser.urlencoded({useNewUrlParser: true, extended: true }))

app.use(bodyParser.json());


app.use(express.static(__dirname + '/../client/dist'));

app.get('/carousel', function(req, res) {
  const clientPath = path.join(__dirname, '../public/index.html');
  res.sendFile(clientPath);
});


// app.post('/carousel', (req, res) => {
//   var images = req.body;
//   console.log('!!!!!!!!req.body: ' + JSON.stringify(req.body));

// })


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});


module.exports = app;