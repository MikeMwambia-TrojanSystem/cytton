const nodemailer = require('nodemailer');
const Transactions = require('../models/transaction.model.js');


//create a new transaction
exports.create = function (req,res){
	let transaction = new Transactions({
		client : req.body.client,
		product: req.body.product,
    	transactionType:req.body.transactionType,
    	date:req.body.date,
    	amount:req.body.amount
	});

	transaction.save(function(err){
		if(err){
			return next(err);
		}else {
			res.send('You added a new transaction to Cytton DB');
		}
	})
}


//Send statement
exports.sendStatement = function(req,res){
	 Transactions.find({client:req.body.client}, function (err, product) {
        if (err) return next(err);
        SendMail(product,req.body.client);
        res.send(product);
    })
}

function SendMail(records,address){
	const addressMail = address;
	const mailcontent = [];
	for(var i = 0;i<records.length;i++){
		const content = 'On'+" "+records[i].date +" "+"you"+" "+records[i].transactionType+" "+records[i].amount+" "+"for our"+" "+records[i].product;
		console.log(content);
		mailcontent.push(content);
	}

	const mailString = mailcontent.join('<br>');
	var transporter = nodemailer.createTransport({
 	service: 'gmail',
 	auth: {
        user: 'cytoninterview@gmail.com',
        pass: 'imepatakana2020'
    }
	});

	const mailOptions = {
  	from: 'cytoninterview@gmail.com', // sender address
  	to: addressMail, // list of receivers
  	subject: 'Cytton Statement', // Subject line
  	html: mailString// plain text body
	};

	transporter.sendMail(mailOptions, function (err, info) {
   	if(err)
     console.log(err)
   	else
     console.log(info);
	});

	
}