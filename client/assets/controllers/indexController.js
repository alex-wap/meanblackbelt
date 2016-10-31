app.controller('indexController', function ($scope, $location, friendsFactory) {
	while(friendsFactory.user == null || friendsFactory.user == 0)
		friendsFactory.user = prompt("Please enter your name:");

	$scope.user = friendsFactory.user;
	$scope.message = friendsFactory.message;
	$scope.qmessage = friendsFactory.qmessage;
	$scope.score = friendsFactory.score;
	$scope.percentage = friendsFactory.percentage;

	friendsFactory.index(function(users) {
		$scope.users = users;
	});

	$scope.logout = function() {
		friendsFactory.user = null;
		friendsFactory.message = null;
		friendsFactory.score = null;
		friendsFactory.percentage = null;	
		$location.url('/');
	}
})