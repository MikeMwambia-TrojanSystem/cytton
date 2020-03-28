const Client = require('../models/user.model.js');

//create a new user
exports.create = function (req,res){
	let user = new Client(
	{
		name :req.body.name,
		email:req.body.email
	});

	user.save(function(err){
		if(err){
			return next(err);
		}else {
			res.send('You added a new user to Cytton DB');
		}
	})
}



