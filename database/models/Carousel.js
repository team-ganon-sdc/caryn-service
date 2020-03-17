const mongoose = require('mongoose');
const db = require('../index.js');
// mongoose.Promise = global.Promise;

const carouselSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  app_description: String,
  images: Array
});



const Carousel = mongoose.model( 'Carousel', carouselSchema );



// exports.Carousel = Carousel;
// exports.findOne = findOne;
// exports.findAll = findAll;
// exports.insertOne = insertOne;
module.exports = Carousel;