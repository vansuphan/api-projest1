var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    iduser: String,
    username: String, 
    password: String
});
var User = mongoose.model('User', userSchema, 'users');

module.exports = User;