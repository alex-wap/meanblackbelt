app.controller('dashController', function ($scope, $location, questionsFactory) {
if(questionsFactory.user == null || questionsFactory.user == 0){
	$location.url('/');
}
	

	$scope.user = questionsFactory.user;
	// console.log($scope.user);

	questionsFactory.index(function(questions) {
		$scope.questions = questions;
	});

	$scope.delete = function(data){
		console.log('delete question');
		console.log(data);
		questionsFactory.delete(data, function(){
			questionsFactory.index(function(data){
				$scope.questions = data;
			})
		})
	}

	$scope.logout = function() {
		questionsFactory.user = null;
		$location.url('/');
	}
})