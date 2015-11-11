var mongoose = require('mongoose');
var validator = require(__dirname + '/../lib/validators.js');
var officerSchema = new mongoose.Schema();

officerSchema({

  name: { type: String, validate: [validator.String, "The name cannot be undefined"]},
  years: { type: Number, validate: [validator.Number, "The ({VALUE}) is belew the minimum allow value ({MIN})"]},
  criminalsBusted : {type: Number, validate: [validator.Number, "The ({VALUE}) is belew the minimum allow value ({MIN})"]}

});

module.exports = exports = mongoose.model('Officer', officerSchema);
