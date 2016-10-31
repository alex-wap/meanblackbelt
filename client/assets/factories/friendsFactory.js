app.factory('friendsFactory', function($http) {
	return {
		user: null,
		score: null,
		percentage: null,
		message: null,
		qmessage: null,
		index: function(callback) {
			$http.get('/friends').then(function(res) {
				callback(res.data);
			});
		},
		create: function(data, callback) {
			data.user = this.user;
			$http.post('/friends', data).then(function(res) {
				callback(res.data);
			});
		}
	}
})