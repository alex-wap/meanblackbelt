app.factory('questionsFactory', function($http) {
	return {
		user: null,
		index: function(callback) {
			$http.get('/questions').then(function(res) {
				callback(res.data);
			});
		},
		create: function(data, callback) {
			console.log(data);
			$http.post('/questions', data).then(function(res) {
				callback(res.data);
			});
		},
		show: function(id, callback) {
			$http.get('/questions/'+id).then(function(res) {
				callback(res.data);
			});
		},
		update: function(question, callback) {
			// console.log('route is: '+'/questions/'+question._id);
			// console.log('question is: ',question);
			$http.put('/questions/'+question._id, question).then(function(res) {
				// console.log('Factory update',question)
				callback();
			});
		},
		delete: function(question, callback){
			$http.delete('/questions/'+question._id).then(function(response) {
        callback();
      });
		}
	}
})