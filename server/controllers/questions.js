var mongoose = require('mongoose');
var Question = mongoose.model('Question');
module.exports = {
	index: function(req, res) {
		Question.find({}, function(err, questions) {
			if (err)
				res.json(err);
			res.json(questions);
		});
	},
	create: function(req, res) {
		var question = new Question(req.body)
		question.save(function(err, question) {
			if (err)
				res.json(err);
			res.json(question);
		});
	},
	show: function(req, res) {
		Question.findOne({_id:req.params.id}, function(err,data){
			if (err){
				console.log(err);
				res.json(err);
			} else{
				res.json(data);
			}
		});
	},
	update: function(req,res){
		console.log('inside update, server controller')
		Question.update({_id: req.params.id}, {$set: {
			option1: {name:req.body.option1.name ,count:req.body.option1.count},
			option2: {name:req.body.option2.name ,count:req.body.option2.count},
			option3: {name:req.body.option3.name ,count:req.body.option3.count},
			option4: {name:req.body.option4.name ,count:req.body.option4.count}
		}}, function(err, question) {
				res.json(question);
		});

//   user: {type: String},
// 	question: {type: String, required : true, minlength: 8},
// 	option1: {name:{type: String, required : true, minlength: 3},count:Number},
// 	option2: {name:{type: String, required : true, minlength: 3},count:Number},
// 	option3: {name:{type: String, required : true, minlength: 3},count:Number},
//   option4: {name:{type: String, required : true, minlength: 3},count:Number}
// }, {timestamps: true});
		// Question.findOne({_id:req.body._id}, function(err,data){
		// 	if(err){
		// 		console.log(err);
		// 		res.json(err);
		// 	} else{
		// 		if(data){
		// 			data.save(function(err, data){
		// 				if (err){
		// 					consoloe.log(err);
		// 					res.json(err);
		// 				} else{
		// 					res.json(data);
		// 				}
		// 			})
		// 		}
		// 	}
		// })
	},
	delete: function(req, res) {
		Question.findOne({_id:req.params.id}, function(err,data){
			if(err){
				console.log(err);
				res.json(err);
			} else{
				if(data){
					Question.remove(data, function(err, data){
						if (err){
							consoloe.log(err);
							res.json(err);
						} else{
							res.json(data);
						}
					})
				}
			}
		})
	}
}