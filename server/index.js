const express = require('express');
const bodyParser = require('body-parser');
// var appRouter = require('./routers/routers.js');
const mongoose = require('mongoose');
const path = require('path');
const Carousel = require('../database/models/Carousel.js');
const db = require('../database/index.js');
const app = express();
const PORT =  3003;

// mongoose.connect('mongodb://localhost/carousels');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use('/carousels/:id', express.static(`${__dirname}/../client/dist`));
app.use(express.static(__dirname + '/../client/dist'));


app.get('/carousels/:id', (req, res) => {
  Carousel.find({id: req.params.id})
  .then((data) => {
    res.send(data);
    console.log(`data sent: ${data}`)
  })
});


const expressServer = app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});


module.exports = expressServer;