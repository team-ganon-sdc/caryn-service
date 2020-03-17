const mongoose = require('mongoose');
const db = require('../database');
mongoose.connect('mongodb://localhost/googleplay');

 module.exports = db;