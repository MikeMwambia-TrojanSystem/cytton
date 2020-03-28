const express = require('express');
const router = express.Router();

//Require controllers 
const productController = require('../controllers/productController.js');

//Test URL for the product API
router.get('/test',productController.test);

//export as a module
module.exports = router;

router.post('/create',productController.create);


