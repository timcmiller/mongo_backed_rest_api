var express = require('express');
var bodyParser = require('body-parser');
var Officer = require(__dirname + '/../models/officers');

var officerRouter = module.exports = exports = express.Router();
process.env.MONGOLAB_URI = 'mongodb://localhost/officer_dev';


officerRouter.get('/officers', function(req, res) {
  Officer.find({}, function(err, data) {
    if(err) throw err;

    res.json(data);
  });
});

officerRouter.post('/officers', bodyParser.json(), function(req, res) {
  var newOfficer = new Officer(req.body);

  newOfficer.save(function(err, data) {
    if (err) throw err;

    res.json(data);
  });
});
