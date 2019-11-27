const md5 = require('md5');
const Product = require('../models/product.model');

var ids = require('short-id');

module.exports.getProducts = async function(req, res, next){
    let products = await Product.find();
    res.json(products);
    // next();
}

module.exports.getType = async function(req, res, next){
    let type = req.params.type;
    if(type.length() == 0){
        res.send('Đéo có nha');
        return;
    }
    let products = await Product.find({
        type: type
    });
    res.json(products);
    // next();
}

module.exports.postProduct = async function (req, res, next) {
    let message = {
        success : true,
        messages: ""
    };
    let reqProduct = await Product.findOne({
        productname : req.body.productname
    },(err)=>{
        if(err){
            return err;
        }
    });
    if(reqProduct){
        message.success = false;
        message.messages = "Không thêm được";
        res.json(message);
        res.status(400).send(err);
        return;
    }
    const product = new Product({
        idproduct : ids.generate(),
        type : req.body.type,
        productname: req.body.productname,
        amount : req.body.amount,
        color : req.body.color,
        price : req.body.price,
        retailprice : req.body.price,
        note : req.body.note,
        img : req.body.img
    });
    try {
        const saveProduct = await product.save();
        message.success = true;
        message.messages = "Đã thêm sản phẩm";
        res.status(200).send(message);
    } catch (error) {
        message.success = false;
        message.messages = "Không thêm được";
        res.json(message);
        res.status(400).send(err);
        
    }
};