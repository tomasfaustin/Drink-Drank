var mongoose = require('mongoose')

var barSchema = new mongoose.Schema({
  name: String,
})

var Bar = mongoose.model('Bars', barSchema);

module.exports = Bar;
