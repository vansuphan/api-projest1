var mongoose = require('mongoose');

var deliverySchema = new mongoose.Schema({
    idproduct : String,
    idscustomer : String,
    amount: Number,
    seller: Boolean,
    idpartner : String
});
var Delivery = mongoose.model('Delivery', deliverySchema, 'productdeliverys');

module.exports = Delivery;