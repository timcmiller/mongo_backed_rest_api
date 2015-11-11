var mongoose = require('mongoose');
var express = require('express');
var app = express();

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/superhero_dev');


app.use('/superhero', superheroRouter);


app.listen(process.env.PORT || 3000, function() {
  console.log('SUPERHERO\'S HERE TO SAVE THE DAY');
});

