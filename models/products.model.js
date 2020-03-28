//create a model to handle the product data
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let productSchema = new Schema({
    name: {type: String, required: true, max: 100}
});
// Export the model
module.exports = mongoose.model('Product', productSchema);