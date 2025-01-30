//model/model.js code..
const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
const userSchema = new Schema({
    name: String,
    age: Number,
    address: String,
    email: String,
    phone: String

});

const Userdb = mongoose.model('User', userSchema);

module.exports = Userdb;
