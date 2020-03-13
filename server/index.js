const path = require('path');
const PORT = process.env.PORT || 3003;
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Image = require('../database/models/Carousel.js');
const mongoDB = 'mongodb://localhost/carousel';
mongoose.connect('mongodb://localhost/carousel');


app.use(bodyParser.urlencoded({ extended: false, useNewUrlParser: true  }))
app.use(bodyParser.json());


app.use(express.static(__dirname + '/../client/dist'));


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.sendFile(path, resolve(__dirname + '/../client/public/index.html'))
  // console.log(req.body);
})


app.post('/carousel', (req, res) => {
  var images = req.body;

})