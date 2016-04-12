var express = require('express');
var bodyParser = require('body-parser');
var Officer = require(__dirname + '/../models/officers');
var error = require(__dirname + '/../lib/errorHandler.js');
var eatAuth = require(__dirname + '/../lib/eat_auth.js');

var officerRouter = module.exports = exports = express.Router();


officerRouter.get('/officers', function(req, res) {
  Officer.find({}, function(err, data) {
    if(err) return error.default(err, res);

    res.send(data);
  });
});

officerRouter.post('/officers', bodyParser.json(), eatAuth, function(req, res) {
  var newOfficer = new Officer(req.body);

  newOfficer.save(function(err, data) {
    if (err) return error.require(err, res);

    res.json(data);
  });
});

officerRouter.put('/officers/:id', bodyParser.json(), eatAuth, function(req, res) {

  var officerData = req.body;
  delete officerData._id;
  console.log(officerData);
  console.log(req.params);
  Officer.update({_id: req.params.id}, officerData, function(err) {
    if(err) return error.default(err, res);

    res.send('updated!');
  });
});

officerRouter.delete('/officers/:id', bodyParser.json(), eatAuth, function(req, res) {

  Officer.remove({_id: req.params.id}, function(err) {
    if(err) return error.default(err, res);

    res.send('deleted!');
  });
});
