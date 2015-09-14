var myApp = angular.module('Menu-Directive', []);
myApp.directive('menuLink', function() {
var htmlTemplate =   '     <md-card>  '  + 
 '         <img ng-src="{{imagePath}}" class="md-card-image" alt="Washed Out">  '  + 
 '         <md-card-content>  '  + 
 '           <h2 class="md-title">Paracosm</h2>  '  + 
 '           <p>  '  + 
 '             The titles of Washed Out's breakthrough song and the first single from Paracosm share the  '  + 
 '             two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well...  '  + 
 '           </p>  '  + 
 '         </md-card-content>  '  + 
 '         <div class="md-actions" layout="row" layout-align="end center">  '  + 
 '           <md-button>Action 1</md-button>  '  + 
 '           <md-button>Action 2</md-button>  '  + 
 '         </div>  '  + 
 '      </md-card>  ' ;  
   
  return {    
    restrict: 'E',
    template: htmlTemplate,
    link: function() {
   	
   
  };
})
	
	



