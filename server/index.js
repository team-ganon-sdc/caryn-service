const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const Carousels = require('../database/model.js');
const db = require('../database/index.js');
const app = express();
const PORT =  3003;
const carouselRouter = require('./routers.js')

// const mongoDB = 'mongodb://localhost/googleplay';
// const mongoDB = 'mongodb://localhost/carousel';

// mongoose.connect(mongoDB, {useUnifiedTopology: true, useNewUrlParser: true}, function(err, success) {
//   if (err) {
//     console.log(err, 'error connecting to mongoDB');
//   } else {
//     console.log("connected to mongoDB");
//   }
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use('/carousels', express.static(`${__dirname}/../client/dist`));
app.use(express.static(__dirname + '/../client/dist'));

app.use('/carousels', carouselRouter);



// app.get('/carousels', (req, res) => {
//   Carousels.Carousels.findOne({id: 1})
//   .then((data) => {
//     console.log(`data sent!: ${data}`);
//     res.send(data);
//     console.log(typeof data);
//     console.log('images', data['images']);

//   })
// });


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

