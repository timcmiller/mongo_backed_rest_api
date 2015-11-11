var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect;

process.env.MONGOLAB_URI = 'mongodb://localhost/officers_felons_test';
require(__dirname + '/../server.js');
var mongoose = require('mongoose');
var Officer = require(__dirname + '/../models/officers.js');
var Felon = require(__dirname + '/../models/felons.js');

describe('the routes', function() {

  after(function(done) {
    mongoose.connection.db.dropDatabase(function() {
      done();
    });
  });
  describe('the officer routes', function() {

    it('should be able to create an officer', function(done) {
      var testOfficer = {name: 'james bond'};
      chai.request('localhost:3000')
        .post('/good/officers')
        .send(testOfficer)
        .end(function(err, res) {
          expect(err).to.eql(null);
          expect(res.body).to.have.property('_id');
          expect(res.body.name).to.eql('james bond');
          expect(res.body.years).to.eql(0);
          expect(res.body.criminalsBusted).to.eql(0);
          done();
      });
    });
  });

  describe('the felon routes', function() {

    it('should be able to create felons', function() {
      var testFelon = {name: 'odd job', crime: 'bank robber'};
      chai.request('localhost:3000')
        .post('/bad/felons')
        .send(testFelon)
        .end(function(err, res) {
          expect(err).to.eql(null);
          expect(res.body).to.have.property('_id');
          expect(res.body.name).to.eql('odd job');
          expect(res.body.crime).to.eql('bank robber');
          expect(res.body.inJail).to.eql(false);
      });
    });
  });
});






