app.factory('questionsFactory', function($http) {
	return {
		index: function(callback) {
			$http.get('/questions').then(function(res) {
				callback(res.data);
			});
		},
		create: function(data, callback) {
			$http.post('/questions', data).then(function(res) {
				callback(res.data);
			});
		}
	}
})