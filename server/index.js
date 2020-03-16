const express = require('express');
const bodyParser = require('body-parser');
// var appRouter = require('./routers/routers.js');
const mongoose = require('mongoose');
// const path = require('path');
const Carousel = require('../database/models/Carousel.js');

const app = express();
const PORT =  3003;

// mongoose.connect('mongodb://localhost/carousel');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use('apps/:Id', express.static(`${__dirname}/../client/dist`));
app.use(express.static(__dirname + '/../client/dist'));

// app.use('/api/carousel', appRouter);

app.get('api/apps/:id/images', (req, res) => {
  // const idnum = res.body.idnum;
  Carousel.find({id: req.params.id})
  .then((results) => {
    res.send(results);
  })
});


const expressServer = app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});


module.exports = expressServer;