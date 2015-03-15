// created service so that we can use this service for setting up app level scope 
var myApp = angular.module('myApp', ['Forms-Directive', 'ngRoute']);

myApp.config(function($routeProvider, $httpProvider) {

	$routeProvider.when('/', {
		templateUrl : 'home.html',
		controller : 'FormsController'
	}).when('/login', {
		templateUrl : 'login.html',
		controller : 'layoutCtrl'
	}).otherwise('/');
   
   $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    $httpProvider.defaults.useXDomain = true;
     $httpProvider.defaults.withCredentials = true;

    //Remove the header containing XMLHttpRequest used to identify ajax call 
    //that would prevent CORS from working
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

  })

myApp.controller('layoutCtrl', function($scope, $rootScope, $http, $location) {

 // $scope.authenticated = true;
  
  
  

  var authenticate = function(credentials, callback) {

    var headers = credentials ? {authorization : "Basic "
        + btoa(credentials.username + ":" + credentials.password)
    } : {};
    console.log(headers) ;
    $http.post('http://192.168.1.18:8080/user',{headers : headers}).success(function(data) {
     if (data.name) {
        $rootScope.authenticated = true;
      } else {
        $rootScope.authenticated = false;
      }
      callback && callback();
    }).error(function() {
	alert("error");
      $rootScope.authenticated = false;
      callback && callback();
    });

  }

  authenticate();  // called on page load
  
  $scope.credentials = {};
  $scope.login = function() {
      authenticate($scope.credentials, function() {
        if ($rootScope.authenticated) {
          $location.path("/");
          $scope.error = false;
        } else {
          $location.path("/login");
          $scope.error = true;
        }
      });
  };


  
  

 });


myApp.controller('navigation', function($rootScope, $scope, $http, $location) {




  var authenticate = function(credentials, callback) {

    var headers = credentials ? {authorization : "Basic "
        + btoa(credentials.username + ":" + credentials.password)
    } : {};

    $http.get('user', {headers : headers}).success(function(data) {
      if (data.name) {
        $rootScope.authenticated = true;
      } else {
        $rootScope.authenticated = false;
      }
      callback && callback();
    }).error(function() {
      $rootScope.authenticated = false;
      callback && callback();
    });

  }

  authenticate();  // called on page load
  
  $scope.credentials = {};
  $scope.login = function() {
      authenticate($scope.credentials, function() {
        if ($rootScope.authenticated) {
          $location.path("/");
          $scope.error = false;
        } else {
          $location.path("/login");
          $scope.error = true;
        }
      });
  };



});

 
 
	



