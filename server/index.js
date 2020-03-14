const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3003;
const bodyParser = require('body-parser');
const {AppImagesModel, AppImagesSchema, findOne, findAll, insertOne} = require('../database/models/Carousel.js');

const app = express();
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/carousel';
var router = express.Router();



// open the default mongo connection
mongoose.connect(mongoDB, {useMongoClient: true}, function(err, success) {
  if (err) {
    // console.log(err, 'error connecting to mongoDB');
  } else {
    // console.log("connected to mongoDB");
  }
});


// mongoose.connect(mongoDB, {useMongoClient: true}, function(err, success) {
//   if (err) {

//   }
// }


app.use(bodyParser.urlencoded({useNewUrlParser: true, extended: true }))

app.use(bodyParser.json());


app.use(express.static(__dirname + '/../client/dist'));




app.get('/carousel', (req, res) => {
  // res.send({working: true})
  // res.sendFile(path, join(__dirname + '/../client/public/index.html'))
  AppImagesModel.find({id: 12}, (err, data) => {
    if (err){
      console.log(`error w get req ${err}`)
    }
    console.log(`!!!!!!!!!64646464 data is ${data}`);
    res.send(data);
  })
});




app.post('/carousel', (req, res) => {
  var images = req.body;
  console.log('!!!!!!!!req.body: ' + JSON.stringify(req.body));

})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});