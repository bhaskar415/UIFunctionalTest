var myApp = angular.module('Menu-Directive', [])
 .directive('menuLink', function() {
var htmlTemplate="";
htmlTemplate += "<md-button";
htmlTemplate += "    ng-class=\"{'active' : isSelected()}\"";
htmlTemplate += "    ui-sref=\"{{section.state}}\"";
htmlTemplate += "    ng-click=\"focusSection()\">";
htmlTemplate += "  {{section.name}}";
htmlTemplate += "  <span class=\"md-visually-hidden\"";
htmlTemplate += "    ng-if=\"isSelected()\">";
htmlTemplate += "    current page";
htmlTemplate += "  <\/span>";
htmlTemplate += "<\/md-button>";

  return {    
    restrict: 'E',
    template: htmlTemplate,
	controller:"MenuController",
    link: function($scope, $element) {
   	
	/*
      scope.isSelected = function() {
        return controller.isSelected(scope.section);
      };

      scope.focusSection = function() {
        // set flag to be used later when
        // $locationChangeSuccess calls openPage()
        controller.autoFocusContent = true;
      };
	  */
    }
  };
})
myApp.controller("MenuController",
			function($scope) {
     
		//	$scope.isSelected = function() {
       // return controller.isSelected($scope.section);
    //  };

   //   $scope.focusSection = function() {
        // set flag to be used later when
        // $locationChangeSuccess calls openPage()
      //  controller.autoFocusContent = true;
  //    };
	}
);




