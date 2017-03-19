var mongoose = require('mongoose')

var barsSchema = new mongoose.Schema({
  name: String,
})

var Bar = mongoose.model('Bars', barSchema);

module.exports = Bar;
