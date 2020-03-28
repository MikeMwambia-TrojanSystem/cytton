const express = require('express');
const router = express.Router();

//Require controllers 
const userController = require('../controllers/userController.js');



//export as a module
module.exports = router;

router.post('/create',userController.create);

