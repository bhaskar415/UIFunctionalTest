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
   
     $httpProvider.defaults.useXDomain = true;
    // $httpProvider.defaults.withCredentials = true;

    //Remove the header containing XMLHttpRequest used to identify ajax call 
    //that would prevent CORS from working
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
 
 $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};
  })

myApp.controller('layoutCtrl', function($scope, $rootScope, $http, $location, $q) {

 // $scope.authenticated = true;
  
  
  

  var authenticate = function(credentials, callback) {

    var headers = credentials ? {authorization : "Basic "
        + btoa(credentials.username + ":" + credentials.password)
    } : {};
	
    console.log(credentials) ;

      $http.post('http://192.168.1.18:8080/').success(function(data) {
					if (data.name) {
						$rootScope.authenticated = true;
					} else {
						$rootScope.authenticated = false;
					}
					callback && callback($rootScope.authenticated);
				}).error(function() {
					$rootScope.authenticated = false;
					callback && callback(false);
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
alert(postData);
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
			
			console.log(response)
                if (response.data == 'ok') {
				        $rootScope.authenticated = true;

                     $location.path("/");
                }
                else {
                $location.path("/login");
				$scope.error = true;
                }
            });
        }



});

myApp.controller('layoutCtrl3', function($rootScope, $scope, $http, $location) {


var authenticate = function(callback) {
$http.get('http://192.168.1.18:8080/user').success(function(data) {
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

$scope.login = function() {
$http.post('http://192.168.1.18:8080/login', $.param($scope.credentials), {
headers : {
"content-type" : "application/x-www-form-urlencoded"
}
}).success(function(data) {
authenticate(function() {
if ($rootScope.authenticated) {
$location.path("/");
$scope.error = false;
} else {
$location.path("/login");
$scope.error = true;
}
});
}).error(function(data) {
$location.path("/login");
$scope.error = true;
$rootScope.authenticated = false;
})
};


});


 
 
	



