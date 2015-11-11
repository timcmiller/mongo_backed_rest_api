var express = require('express');
var bodyParser = require('body-parser');
var Officer = require(__dirname + '/../models/officers');

var officerRouter = module.exports = exports = express.Router();


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

officerRouter.put('/officers', bodyParser.json(), function(req, res) {

  var officerData = req.body;
  delete officerData._id;
  Officer.update({_id: officerData._id}, officerData, function(err) {
    if(err){console.log(err); throw err;}

    res.send('updated!');
  });
});

officerRouter.delete('/officers/:id', function(req, res) {

  Officer.remove({_id: req.params._id}, function(err) {
    if(err){console.log(err); throw err;}

    res.send('deleted!');
  });
});
