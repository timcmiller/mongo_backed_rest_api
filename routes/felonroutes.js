var express = require('express');
var bodyParser = require('body-parser');
var Felon = require(__dirname + '/../models/felons');

var felonRouter = module.exports = exports = express.Router();
process.env.MONGOLAB_URI = 'mongodb://localhost/felon_dev';

felonRouter.get('/felons', function(req, res) {
  Felon.find({}, function(err, data) {
    if (err) throw err;

    res.json(data);
  });
});

felonRouter.post('/felons', function(req, res) {
  var newFelon = new Felon(req.body);

  newFelon.save(function(err, data) {
    if(err) throw err;

    res.json(data);
  });
});
