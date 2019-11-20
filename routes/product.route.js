const express = require('express');
const router = express.Router();
let productController = require('../controllers/product.controller');
const Product = require('../models/product.model');

router.post('/', productController.postProduct );

router.get('/', productController.getProducts);

module.exports = router;