const express = require('express');
const mongoose = require("mongoose");
// npm install require-dir for requiring automatically
const requireDir = require('require-dir')


// Initializing the API
const app = express();

// Creates a db schema
require('./src/models/Products');

// Tell the API to allow receiving json data
app.use(express.json());

// Initializing the DB
mongoose.connect(
	'mongodb://localhost:27017/nodeapi', 
	{
		useNewUrlParser: true
	}
);
requireDir('./src/models');


// accepts all requests with this route
// and send it to routes including '/api' before that)
app.use('/api', require("./src/routes"));


app.listen(3001);

