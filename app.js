const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/products.route.js');//Import routes for the products
const users = require('./routes/user.route.js');//Import routes for the products
const transactions = require('./routes/transaction.route.js');//Import routes for the products
const app = express();
const port = 3000;
// Set up mongoose connection
const mongoose = require('mongoose');
let dblink = 'mongodb+srv://beast:beast2020@cyttoninterview-swxue.mongodb.net/cytton?retryWrites=true&w=majority';
let mongoDB = dblink;
mongoose.connect(mongoDB,{useNewUrlParser : true,useUnifiedTopology : true});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => res.send('Hello World!'));
//Each Data segment and it's own users
app.use('/products',product);
app.use('/users',users);
app.use('/transactions',transactions);

app.listen(port, () => console.log(`Cytton mail sending app listening on port ${port}!`));

