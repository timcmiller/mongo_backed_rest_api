var express = require('express');
var Officer = require(__dirname + '/../models/officers');
var Felon = require(__dirname + '/../models/felons');

var bustedRouter = module.exports = exports = express.Router();

bustedRouter.get('/busted', function(req, res, next) {

  Officer.findOne({}, function(err, data) {
    if (err) {console.log(err); throw err;}
    if(data === null) res.send('There are no officers to bust the criminals!');

    req.officer = data;
    next();
  });
});


bustedRouter.get('/busted', function(req, res, next) {
  Felon.findOne({}, function(err, data) {
    if (err) {console.log(err + 'heres error'); throw err;}
    if(data === null || data.inJail === true) {
     res.send('There are no felons to bust.');
     res.end();
    }

    req.felon = data;
    next();
  });
});

bustedRouter.get('/busted', function(req, res, next) {
  var ran = Math.floor(Math.random() * 10 + 1);
  if (ran > 8) {
    Felon.remove({_id: req.felon._id}, function(err) {
      if(err) {console.log(err); return(err);}

      req.busted = ('SHOTS FIRED! ' + req.officer.name + ' killed ' + req.felon.name + '!' );
      req.officer.criminalsBusted++;
      next();
    });
  }
  if (ran < 8) {
    Felon.update({_id: req.felon._id}, {inJail: true},  function(err) {
      if(err) {console.log(err); return(err);}

      req.busted = (req.officer.name + ' has apprehended ' + req.felon.name + '.');
      req.officer.criminalsBusted++;
      next();
    });
  }
});

bustedRouter.get('/busted', function(req, res) {
  Officer.update({_id: req.officer._id}, {criminalsBusted: req.officer.criminalsBusted}, function(err) {
    if(err) {console.log(err); return(err);}

    res.send(req.busted);
  });
});
