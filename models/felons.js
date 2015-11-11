var mongoose = require('mongoose');
var validator = require(__dirname + '/../lib/validators.js');
var felonSchema = new mongoose.Schema();


felonSchema({
  name: {type: String, validate: [validator.String, "The name cannot be undefined"]},
  crime: String,
  inJail: {type: Boolean, default: false}
});

module.exports = exports = mongoose.model('Felon', felonSchema);
