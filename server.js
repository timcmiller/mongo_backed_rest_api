var mongoose = require('mongoose');
var express = require('express');
var app = express();
var felonRouter = require(__dirname + '/routes/felon_routes');
var officerRouter = require(__dirname + '/router/officer_routes');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/officer_dev');

