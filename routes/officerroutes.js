var express = require('express');
var bodyParser = require('body-parser');
var Superhero = require(__dirname + '/../models/superheros');

var superheroRouter = module.exports = exports = express.Router();


superheroRouter.get('/superheros', function(req, res) {
  Superhero.find({}, function(err, data) {
    if(err) throw err;

    res.json(data);
  });
});

superheroRouter.post('/superheros', bodyParser.json(), function(req, res) {
  var newSuperhero = new Superhero(req.body);

  newSuperhero.save(function(err, data) {
    if (err) throw err;

    res.json(data);
  });
});
