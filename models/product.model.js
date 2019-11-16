var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    idproduct : String,
    iduser: String,
    type : String,
    productname: String,
    amount : Number,
    color : String,
    note : String
});
var Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;