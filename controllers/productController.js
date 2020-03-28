const Product = require('../models/products.model.js');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('You are at the product controller file!');
};


//create a new product
exports.create = function (req,res){
	let product = new Product(
	{
		name : req.body.name
	});

	product.save(function(err){
		if(err){
			return next(err);
		}else {
			res.send('You added a new product to Cytton DB');
		}
	})
}

