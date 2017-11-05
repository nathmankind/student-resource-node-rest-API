const express = require('express');

const router = express.Router();

const Student = require('../models/student');

router.get('/students', function(req, res, next){
	Student.find({}).then(function(students){
		res.send(students);
	});
	
});

router.post('/students', function(req, res, next){
	console.log(req.body);

	res.send({
		type: 'POST',
		name: req.body.name,
		email: req.body.email,
		level: req.body.level,
		department: req.body.department,
		address: req.body.address
	}).catch(function(next));
});

router.post('/students', function(req, res, next){
	Student.create(req.body).then(function (student){

		res.send(student);
	});

	
});


router.put('/students/:id', function(req, res, next){
	Student.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(student){
		Student.findOne({_id: req.params.id}).then(function(student){
			res.send(student);
		});
		
	});
	
});


router.delete('/students/:id', function(req, res, next){
	Student.findByIdAndRemove({_id: req.params.id}).then(function(student)
		res.send(student);
	});
	
});

module.exports = router;