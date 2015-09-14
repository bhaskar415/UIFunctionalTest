var myApp = angular.module('Menu-Directive', []);
myApp.directive('menuLink', function() {
var htmlTemplate =  '   <md-button  '  + 
 '       ng-class="{'active' : isSelected()}"  '  + 
 '       ui-sref="{{section.state}}"  '  + 
 '       ng-click="focusSection()">  '  + 
 '     {{section.name}}  '  + 
 '     <span class="md-visually-hidden"  '  + 
 '       ng-if="isSelected()">  '  + 
 '       current page  '  + 
 '     </span>  '  + 
 '  </md-button>  ' ;   
   
  return {    
    restrict: 'E',
    template: htmlTemplate,
    link: function(scope, element) {
   	
      scope.isSelected = function() {
        return controller.isSelected(scope.section);
      };

      scope.focusSection = function() {
        // set flag to be used later when
        // $locationChangeSuccess calls openPage()
        controller.autoFocusContent = true;
      };
    }
  };
})
	
	



