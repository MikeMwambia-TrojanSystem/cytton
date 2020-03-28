const express = require('express');
const router = express.Router();

//Require controllers 
const transactionController = require('../controllers/transactionController.js');



//export as a module
module.exports = router;

router.post('/create',transactionController.create);

router.get('/:client',transactionController.sendStatement);