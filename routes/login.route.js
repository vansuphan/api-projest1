const express = require('express');
const router = express.Router();
var loginController = require('../controllers/login.controller');
router.post('/',loginController.postlogin);
router.get('/',loginController.login);
module.exports = router;