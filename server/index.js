require('newrelic');
const express = require('express');
const path = require('path');
// const Carousels = require('../database/model.js');
const bodyParser = require('body-parser');
// const db = require('../database/index.js');
const app = express();
const PORT =  3003;

const { Pool } = require('pg');

const pool = new Pool({
  user: 'caryn',
  host: 'localhost',
  database: 'caryn',
  password:'',
  port: 5432
})

pool.connect((err) => {
  if (err) {
    console.error(err);
  }
});

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
  let query = `select * from apppreview where id=${req.params.id};`
  pool.query(query, (err, result) => {
    if (err) {
      console.error(err)
    } else {
      res.json(result.rows)
    }
  })
})

app.post('/carousels', (req, res) => {
  var images = req.body.images;
  var description = req.body.description;
  var additionaltext = req.body.additionaltext;
  var id;


  let query = `INSERT INTO apppreview (description, additionaltext, images) VALUES ($1, $2, $3)`
  let values = [description, additionaltext, images];
  pool.query(query, values, (err, result) => {
    if (err) {
      console.error(err)
    } else {
      // console.log('successfully inserted new data to the database')
      res.json('successfully inserted new data to the database');
    }
  })


// app.put('/carousels/:id', (req, res) => {
//   let description = req.body.description;
//   let additionalText = req.body.additionalText;
//   let update = {
//     app_description: description,
//     additional_text: additionalText
//   }
//   console.log(req.params.id)
//   Carousels.findOneAndUpdate({id: req.params.id}, update, (err, results) => {
//     if (err) {
//       return console.log('error updating to db: ', err)
//     }
//     res.send(results);
//   })
// })

// app.delete('/carousels/:id', (req, res) => {
//   Carousels.findOneAndDelete({id: req.params.id}, (err, result) => {
//     if (err) {
//       return console.log('error deleting from db: ', err)
//     } else {
//       res.send(result)
//     }
//   })
// })


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app





