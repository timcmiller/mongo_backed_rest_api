var mongoose = require('mongoose');
var validator = require(__dirname + '/../lib/validators.js');



var felonSchema = new mongoose.Schema({
  type: {type: String, default: 'robber'},
  name: {type: String, required: true},
  crime: String,
  inJail: {type: Boolean, default: false}
});

module.exports = exports = mongoose.model('Felon', felonSchema);
