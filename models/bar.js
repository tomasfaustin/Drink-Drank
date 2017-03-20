var mongoose = require('mongoose')

var barSchema = new mongoose.Schema({
  name				: String,
  description	: String
})

var Bar = mongoose.model('Bars', barSchema);

module.exports = Bar;
