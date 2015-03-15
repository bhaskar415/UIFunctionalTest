var myApp = angular.module('Forms-Service', ['http-CURD-Service', 'App-Constants-Service']);

myApp.service(
			"FormsService",
			function( $http, $q, ConstructUrls, httpCURDOperations) {				
		
		var _AllApplicationSearchBaseUrl = '/forms';
		var _FormDataSaveBaseUrl = '/formsDataImpl/cascadeSave';
		
		var url = ConstructUrls.makeUrl(_AllApplicationSearchBaseUrl)

		this.getForms = function($scope) {
		
	 	alert(url);
			httpCURDOperations.Get(url).then(
                            function( data ) {
							$scope.forms = data._embedded.forms;
                            });
			}


		
	
 }
);	

