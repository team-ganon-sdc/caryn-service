const mongoose = require('mongoose');
const db = require('../database');
mongoose.connect('mongodb://localhost/carousel');

 module.exports = db;