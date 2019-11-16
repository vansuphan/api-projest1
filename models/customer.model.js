var mongoose = require('mongoose');

var customerSchema = new mongoose.Schema({
    idscustomer : String,
    name: String,
    address: String,
    facebook : String,
    phone : String
});
var Customer = mongoose.model('Customer', customerSchema, 'customers');

module.exports = Customer;