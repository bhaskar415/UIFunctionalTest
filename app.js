// created service so that we can use this service for setting up app level scope 
var myApp = angular.module('myApp', ['Forms-Directive']);

myApp.config(function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl : 'home.html',
		controller : 'FormsController'
	}).when('/login', {
		templateUrl : 'login.html',
		controller : 'navigation'
	}).otherwise('/');


  })

myApp.controller('layoutCtrl', function($scope) {


 });


myApp.controller('navigation', function() {});

 
 
	



