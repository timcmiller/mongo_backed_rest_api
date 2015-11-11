var express = require('express');
var bodyParser = require('body-parser');
var Felon = require(__dirname + '/../models/felons');

var felonRouter = module.exports = exports = express.Router();


felonRouter.get('/felons', function(req, res) {
  Felon.find({}, function(err, data) {
    if (err) {console.log(err); throw err;}

    res.json(data);
  });
});

felonRouter.post('/felons', bodyParser.json(), function(req, res) {
  console.log(req.body);
  var newFelon = new Felon(req.body);

  newFelon.save(function(err, data) {
    if(err) {console.log(err); throw err;}

    res.json(data);
  });
});

// felonRouter.name('/felons/:name', bodyParser.json(), function(req, res) {

//   Felon.update({name: req.params.name}, req.body, function(err) {
//     if (err) {console.log(err); throw err;}

//     res.json({msg: 'BUSTED!'});
//   });
// });

