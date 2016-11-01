var questions = require('../controllers/questions.js');
module.exports = function(app) {

	app.get('/questions', questions.index);
  app.get('/questions/:id', questions.show);
  app.put('/questions/:id', questions.update);
	app.post('/questions', questions.create);
  app.delete('/questions/:id', function(req, res) {
        questions.delete(req, res);
    })
}