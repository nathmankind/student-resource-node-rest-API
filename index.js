const express = require('express');
const bodyParser = require('body-parser');


const mongoose = require('mongoose');


//set up express 
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/student/user-test');
mongoose.Promise = global.Promise;


app.use(express.static('./public'));

app.use(bodyParser.json());

// middleware handler
app.use(function(err, req, res, next){
	res.status(422).send({error: err.message});
});

app.use('/api/',require('./routes/api'));
// app.get('/api', function(req, res){
// 	console.log('GET request');
// 	res.send({name: 'Gabriel'})
// })

//listen for request
app.listen(process.env.port|| 4000, function(){
	console.log('now listening for request');
});

