const express = require('express');
const path = require('path');
const Carousels = require('../database/model.js');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const app = express();
const PORT =  3003;


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/carousels/:appId', (req, res) => {
  const appId = req.params.id;
  Carousels.find({id: appId}, (err, results) => {
    if (err) {
      return console.log('error getting from db: ', err)
    }
    res.json(results)
  })
})
  // app.get(function (req, res) {
  //   Carousels.find(req.params.id, (err, result) => {
  //     if (err) {
  //       res.status(500).send('Internal server error');
  //       console.log('Internal server error', err)

  //     }
  //     res.json(result[0]);
  //     done();
  //   });
  // });


// const mongoDB = 'mongodb://localhost/googleplay';
// const mongoDB = 'mongodb://localhost/carousel';

// mongoose.connect(mongoDB, {useUnifiedTopology: true, useNewUrlParser: true}, function(err, success) {
//   if (err) {
//     console.log(err, 'error connecting to mongoDB');
//   } else {
//     console.log("connected to mongoDB");
//   }
// });


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app



