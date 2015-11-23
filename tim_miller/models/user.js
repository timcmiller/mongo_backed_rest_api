var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var eat = require('eat');

var userSchema = new mongoose.Schema({
  username: {type: String, require: true, index: true, unique: true},
  auth: {
    basic: {
      username: String,
      password: String
    }
  }
});

userSchema.methods.hashPassword = function(password) {
  console.log(password);
  var hash = this.auth.basic.password = bcrypt.hashSync(password, 8);
  return hash;
};

userSchema.methods.checkPassword = function(password) {
  return bcrypt.compareSync(password, this.auth.basic.password);
};

userSchema.methods.generateToken = function(callback) {
  var id = this._id;
  eat.encode({_id: id}, process.env.APP_SECRET, callback);
};

module.exports = exports = mongoose.model('User', userSchema);
