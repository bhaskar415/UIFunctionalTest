var myApp = angular.module('AddForms-Controller', ['AddForms-Service']);

myApp.controller("AddFormsController",
			function($scope, AddFormsService) {
     
			$scope.nt1 = [{}];

			
			$scope.addForm = function( newForm ) {
					newForm.data=[];	// added this empty data variable to construct a valid JSON object so that Forms get created with out error if not POST req is not accepted because of the incomplete mapping to the assigned object in Spring backend		
		 			AddFormsService.addform(newForm);
							$scope.addTableInd = false; // to hide the form div after adding new table
				};
				
			$scope.addEmptyColumn = function( ) {
				$scope.nt1.push({});
			
			}

			//Add new Tables function to show new form on UI which will change the view
	     	$scope.addFormShowView = function() {	 			
				$scope.addTableInd = true;
				$scope.nt1 = [{}];
			};
			//Cancel Add new Tables function to reset some indicators which will change the view
	     	$scope.addFormCancelView = function() {	 			
				$scope.addTableInd = false;
				
			};
	}
);

	

	
	



