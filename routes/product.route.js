const express = require('express');
const router = express.Router();
let productController = require('../controllers/product.controller');
const Product = require('../models/product.model');

router.post('/', productController.postProduct );

router.get('/',(req,res)=>{
    var idproduct = req.body.id
    if(!idproduct){
        
        res.send('No data');
    }
    let product = Product.findOne({
        idproduct : idproduct
    });
    res.json(product);
});

module.exports = router;