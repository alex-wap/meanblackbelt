app.controller('indexController', function ($scope, $location, questionsFactory) {

	$scope.user = questionsFactory.user;

	$scope.login = function() {
		questionsFactory.user = $scope.user;
		// console.log($scope.user);
		$location.url('/dashboard');
	}

})