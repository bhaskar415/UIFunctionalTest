var myApp = angular.module('AddForms-Service', ['http-CURD-Service', 'App-Constants-Service']);

myApp.service(
			"AddFormsService",
			function( $http, $q, ConstructUrls, httpCURDOperations) {				
		
		var _AllApplicationSearchBaseUrl = '/forms';
		
		var url = ConstructUrls.makeUrl(_AllApplicationSearchBaseUrl)

		
		this.addform = function(data) {		
  				httpCURDOperations.Add(url, data);
			}
			

		
	
 }
);	
