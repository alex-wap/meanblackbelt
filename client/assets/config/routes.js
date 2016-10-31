var app = angular.module('app', ['ngRoute', 'ngMessages']);
app.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'partials/index.html',
		controller: 'indexController'
	})	
	.when('/new_question',{
		templateUrl: 'partials/new.html',
		controller: 'newController'
	})
	.when('/lets_play',{
		templateUrl: 'partials/play.html',
		controller: 'playController'
	})	
	.otherwise({
		redirectTo: '/'
	});
});