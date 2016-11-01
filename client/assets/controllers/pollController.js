app.controller('pollController', function ($scope, $routeParams, $location, questionsFactory) {
if(questionsFactory.user == null || questionsFactory.user == 0){
	$location.url('/');
}

	$scope.user = questionsFactory.user;
	// console.log($routeParams);
	var question_id = $routeParams.id;
	questionsFactory.show(question_id, function(data) {
		if (data.errors)
			$scope.errors = data.errors;
		else {
			$scope.question = data;
		}
	});

	$scope.update = function(option) {
		var question = $scope.question;
		if (option == 1){
			question.option1.count++;
		}
		else if (option == 2){
			question.option2.count++;
		}
		else if (option == 3){
			question.option3.count++;
		} 
		else{
			question.option4.count++;
		}
		// questionsFactory.update(question, function(){
		// 	console.log('do update')
		// })
		questionsFactory.update(question, function(){
			console.log('we did it');
		})
		
	}

})