// created service so that we can use this service for setting up app level scope 
var myApp = angular.module('myApp', ['Forms-Directive', 'ngRoute']);

myApp.config(function($routeProvider, $httpProvider) {

	$routeProvider.when('/', {
		templateUrl : 'home.html',
		controller : 'FormsController'
	}).when('/login', {
		templateUrl : 'login.html',
		controller : 'layoutCtrl2'
	}).otherwise('/');
   
   $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
   
  })

myApp.controller('layoutCtrl', function($scope, $rootScope, $http, $location, $q) {

 // $scope.authenticated = true;
  
  
  

  var authenticate = function(credentials, callback) {

    var headers = credentials ? {authorization : "Basic "
        + btoa(credentials.username + ":" + credentials.password)
    } : {};
	
    console.log(credentials) ;

      $http.post('http://192.168.1.18:8080/user',  {headers : headers}).success(function(data) {
     if (data.name) {
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


myApp.controller('layoutCtrl2', function($rootScope, $scope, $http, $location) {


 $scope.login = function () {
 


            var postData = 'username=' + $scope.credentials.username + '&password=' + $scope.credentials.password ;

            $http({
                method: 'POST',
                url: 'http://192.168.1.18:8080/authenticate',
                data: postData,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "X-Login-Ajax-call": 'true'
                }
            })
            .then(function(response) {
                if (response.data == 'ok') {
                    window.location.replace('/resources/calories-tracker.html');
                }
                else {
                    $scope.vm.errorMessages = [];
                    $scope.vm.errorMessages.push({description: 'Access denied'});
                }
            });
        }



});

 
 
	



