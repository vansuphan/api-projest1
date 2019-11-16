var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    idproduct : String,
    type : String,
    productname: {
        required: true,
        type: String,
        min : 4,
        max : 255
    },
    amount : {
        type : Number,
        required: true
    },
    color : String,
    price : Number,
    note : String,
    img : String
});
var Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;