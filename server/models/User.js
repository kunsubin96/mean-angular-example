var mongoose = require('../mongoose/mongoose');
var UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    firstname:String,
    lastname:String,
    token:String
  });
  module.exports = mongoose.model('User', UserSchema);