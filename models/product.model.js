var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    idproduct : String,
    type : String,
    productname: String,
    amount : Number,
    color : String,
    price : Number,
    note : String,
    img : String
});
var Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;