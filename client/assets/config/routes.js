var app = angular.module('app', ['ngRoute', 'ngMessages']);
app.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'partials/index.html',
		controller: 'indexController'
	})	
	.when('/dashboard',{
		templateUrl: 'partials/dashboard.html',
		controller: 'dashController'
	})
	.when('/create',{
		templateUrl: 'partials/create.html',
		controller: 'createController'
	})
	.when('/poll/:id',{
		templateUrl: 'partials/poll.html',
		controller: 'pollController'
	})
	.otherwise({
		redirectTo: '/'
	});
});