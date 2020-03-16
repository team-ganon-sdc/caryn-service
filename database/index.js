const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/carousel';

const db = mongoose.connect(mongoUri);





module.exports = db;