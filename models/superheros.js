var mongoose = require('mongoose');

var superHeroSchema = new mongoose.Schema({
  name: {type: String, required: true},
  secretIdenity: {type: String, default: 'unknown'},
  superPower: String,
  location: String

});

module.exports = exports = mongoose.model('Superhero', superHeroSchema);
