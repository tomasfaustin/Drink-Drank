var mongoose = require('mongoose')

var barSchema = new mongoose.Schema({
  name				: String,
  image_url  	: String,
  location    : String,
  address			: String,
  visited			: {type: Boolean, default: false}
})

var Bar = mongoose.model('Bars', barSchema);

module.exports = Bar;
