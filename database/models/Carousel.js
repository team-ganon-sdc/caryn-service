const mongoose = require('mongoose');
const db = require('../index.js');

const carouselSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  app_description: String,
  images: Array
});

const Carousel = mongoose.model( 'Carousel', carouselSchema );

module.exports = Carousel;