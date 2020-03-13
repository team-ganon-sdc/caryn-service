const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('./index.js');

const AppImagesSchema = new Schema({
  "_id": { type: Number, unique: true },
  "app_description": String,
  "images": [String]
});

const AppImagesSchemaFaker = {
  "id": { type: Number, unique: true },
  "app_description": String,
  "images": [String]
};


var AppImagesModel = mongoose.model( 'Image', AppImagesSchema );

// findAll retrieves all appimages data
function findAll(callback) {
  AppImagesModel.find({}, callback);
}

// findOne will retrieve the appimage associated with the given id
function findOne(id, callback) {
  AppImagesModel.find({ id: id }, callback);
}

// insertOne inserts one appImages schema into db
function insertOne(schema, callback) {
  AppImagesModel.create(schema, callback);
}

exports.AppImagesModel = AppImagesModel;
exports.findOne = findOne;
exports.findAll = findAll;
exports.insertOne = insertOne;