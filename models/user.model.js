//create a model to handle the product data
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let cyttonClient = new Schema({
	name:{type:String,required:true},
	email:{type:String,required:true}
});
// Export the model
module.exports = mongoose.model('Client', cyttonClient);