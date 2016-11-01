app.controller('createController', function ($scope, $location, questionsFactory) {
if(questionsFactory.user == null || questionsFactory.user == 0){
	$location.url('/');
}
	$scope.user = questionsFactory.user;
	// console.log($scope.user);

	$scope.errors = null;

	$scope.new_question = function() {
		var question = {
				user: $scope.user,
				question: $scope.question.question,
				option1: {name:$scope.question.option1,count:0},
				option2: {name:$scope.question.option2,count:0},
				option3: {name:$scope.question.option3,count:0},
				option4: {name:$scope.question.option4,count:0}
		}
		questionsFactory.create(question, function(data) {
			if (data.errors)
				$scope.errors = data.errors;
			else {
				$location.url('/dashboard');
			}
		});
	};
});