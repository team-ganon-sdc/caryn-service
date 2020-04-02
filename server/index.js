const express = require('express');
const path = require('path');
const Carousels = require('../database/model.js');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const app = express();
const PORT =  3003;

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// 'http://ec2-52-53-128-255.us-west-1.compute.amazonaws.com:80'

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/carousels/:id', (req, res) => {
  Carousels.find({id: req.params.id}, (err, results) => {
    if (err) {
      return console.log('error getting from db: ', err)
    }
    res.json(results)
  })
})

app.post('/carousels', function(req, res) {
  let newCarousel = new Carousels({
    id: req.body.id,
    images: req.body.images,
    app_description: req.body.description,
    additional_text: req.body.additionalText
  })

  newCarousel.save((err, result) => {
    if (err) {
      return console.log(err)
    } else {
      res.send(result)
    }
  })
})

app.put('/carousels/:id', (req, res) => {
  let description = req.body.description;
  let additionalText = req.body.additionalText;
  let update = {
    app_description: description,
    additional_text: additionalText
  }
  Carousels.findOneAndUpdate({id: req.params.id}, update, (err, results) => {
    if (err) {
      return console.log('error updating to db: ', err)
    }
    res.send(results);
  })
})

app.delete('/carousels/:id', (req, res) => {
  Carousels.findOneAndDelete({id: req.params.id}, (err, result) => {
    if (err) {
      return console.log('error deleting from db: ', err)
    } else {
      res.send(result)
    }
  })
})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app



