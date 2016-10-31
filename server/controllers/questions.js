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
	}
}