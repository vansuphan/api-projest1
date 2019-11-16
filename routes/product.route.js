const express = require('express');
const router = express.Router();
var productController = require('../controllers/product.controller');
router.post('/', productController.postProduct );
router.get('/',(req,res)=>{
    res.send('product')
});
module.exports = router;