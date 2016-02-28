'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ThingSchema = new mongoose.Schema({
  name: String,
  amount: Number,
  given: Number,
  image: String
});

export default mongoose.model('Thing', ThingSchema);
