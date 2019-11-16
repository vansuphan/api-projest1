const md5 = require('md5');
const Product = require('../models/product.model');

var ids = require('short-id');
module.exports.postProduct = async function (req, res, next) {
    const product = new Product({
        idproduct : ids.generate(),
        type : req.body.type,
        productname: req.body.productname,
        amount : req.body.amount,
        color : req.body.color,
        price : req.body.price,
        note : req.body.note,
        img : req.body.img
    });
    try {
        const saveProduct = await product.save();
        res.send("Da them san pham");
    } catch (error) {
        res.status(400).send(err);
    }
};