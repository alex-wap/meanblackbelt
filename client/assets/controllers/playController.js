app.controller('playController', function ($scope, $location, questionsFactory, friendsFactory) {
while(friendsFactory.user == null || friendsFactory.user == 0)
	friendsFactory.user = prompt("Please enter your name:");

	$scope.user = friendsFactory.user;
	$scope.errors = null;
	$scope.questions = [];
	$scope.answers = [];
	friendsFactory.message = null;
	friendsFactory.qmessage = null;
	friendsFactory.score = null;
	friendsFactory.percentage = null;	

	questionsFactory.index(function(questions) {
		var _questions = [];
		for (var i = 0; i < 3; i++) {
			var idx = Math.floor(Math.random() * (questions.length));
			$scope.questions.push(questions[idx]);
			questions.splice(idx, 1);
		}
	});

	$scope.submit_test = function() {
		var count = 0, total = $scope.answers.length;
		for (var i = 0; i < total; i++) {
			if ($scope.answers[i] == $scope.questions[i].correct_answer)
				count++;
		}
		var percentage = Math.round(count / total * 1000) / 10;
		var score = count.toString() + '/' + total.toString();
		friendsFactory.create({percentage: percentage, score: score}, function(data) {
			if (data.errors)
				$scope.errors = data.errors;
			else {
				if (count == total)
					friendsFactory.message = `That was great, ${friendsFactory.user}!`;
				else
					friendsFactory.message = `Good try, ${friendsFactory.user}.`;	
				friendsFactory.score = score;
				friendsFactory.percentage = percentage;				
				$location.url('/');
			}
		});
	}
})