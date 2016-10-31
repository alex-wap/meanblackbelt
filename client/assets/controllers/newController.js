app.controller('newController', function ($scope, $location, friendsFactory, questionsFactory) {
while(friendsFactory.user == null || friendsFactory.user == 0)
	friendsFactory.user = prompt("Please enter your name:");

	$scope.errors = null;
	friendsFactory.message = null;
	friendsFactory.qmessage = null;
	friendsFactory.score = null;
	friendsFactory.percentage = null;	


	$scope.errors = null;
	friendsFactory.message = '';

	$scope.new_question = function() {
		questionsFactory.create($scope.question, function(data) {
			if (data.errors)
				$scope.errors = data.errors;
			else {
				friendsFactory.qmessage = "New question added!"
				$location.url('/');
			}
		});
	};
	$scope.logout = function() {
		friendsFactory.user = null;
		friendsFactory.message = null;
		friendsFactory.qmessage = null;
		friendsFactory.score = null;
		friendsFactory.percentage = null;	
		$location.url('/');
	}	
});