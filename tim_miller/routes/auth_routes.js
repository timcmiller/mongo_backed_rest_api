var express = require('express');
var bodyParser = require('body-parser');
var User = require(__dirname + '/../models/user.js');
var basicHttp = require(__dirname + '/../lib/basic_http.js');

var authRouter = module.exports = exports = express.Router();

authRouter.get('/signin', basicHttp, function(req, res) {
  if(!(req.auth.username && req.auth.password)) {
    console.log('Make sure you are using basic auth standards');
    return res.status(401).json({msg: 'What you talkin bout Willis'});
  }

  // User.findOne({'auth.basic.username'})

})
