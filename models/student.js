const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//set student schema and model
const StudentSchema = new Schema({
	firstname: {
		type: String,
		required: [true, 'This field is required']
	},
	lastname: {
		type: String,
		required: [true, 'This field is required']
	}

	email: {
		type: String,
		required: [true, 'Email is required']
	},

	gender: {
		type: Boolean,
		default: male
	},

	level: {
		type: Number,
		required: [true, 'This field is required']
		unique: true,
		validate: {
			validator = Number.isInteger,
			message: '{VALUE} is not a number'
		}
	},

	department:{
		type: String,
		required: [true, 'This field is required']
	},

	faculty:{
		type: String,
		required: [true, 'This field is required']
	}

	address: {
		type: String,
		required: [true, 'This field is required']
	},

	religion:{
		type: String
	}

});

const Student = mongoose.model('student', StudentSchema);
module.exports = Student;