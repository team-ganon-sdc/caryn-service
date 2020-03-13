const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Image = require('../database/models/Schema.js');
mongoose.connect('mongodb://localhost/carousel');


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());


app.use(express.static(__dirname + '/../client/public'));


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send({"what time is it?": "time 4 broccoli"});
})