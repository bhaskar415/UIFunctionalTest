var myApp = angular.module('Menu-Directive', []);
myApp.directive('menuLink', function(){  
var htmlTemplate = "<div><h2>Paracosm</h2><div>";
  return {
    restrict: 'EA', 
    template: htmlTemplate   
  };
	
	



