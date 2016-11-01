var mongoose = require('mongoose');
var QuestionSchema = new mongoose.Schema({
  user: {type: String},
	question: {type: String, required : true, minlength: 8},
	option1: {name:{type: String, required : true, minlength: 3},count:Number},
	option2: {name:{type: String, required : true, minlength: 3},count:Number},
	option3: {name:{type: String, required : true, minlength: 3},count:Number},
  option4: {name:{type: String, required : true, minlength: 3},count:Number}
}, {timestamps: true});
var Question = mongoose.model('Question', QuestionSchema);