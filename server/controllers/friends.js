var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
module.exports = {
	index: function(req, res) {
		Friend.find({}, function(err, friends) {
			if (err)
				res.json(err);			
			res.json(friends);
		});
	},
	create: function(req, res) {
		var friend = new Friend(req.body)
		friend.save(function(err, friend) {
			if (err)
				res.json(err);			
			res.json(friend);
		});
	}
}