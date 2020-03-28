//create a model to handle the transaction data
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let transactionSchema = new Schema({
	client:{type:String,required:true},
    product: {type:String,required:true},
    transactionType:{type:String,required:true},
    date:{type:String,required:true},
    amount:{type:Number,required:true},
});
// Export the model
module.exports = mongoose.model('Transactions', transactionSchema);