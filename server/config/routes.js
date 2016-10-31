var friends = require('../controllers/friends.js');
var questions = require('../controllers/questions.js');
module.exports = function(app) {
	app.get('/friends', friends.index);
	app.post('/friends', friends.create);

	app.get('/questions', questions.index);
	app.post('/questions', questions.create);
}