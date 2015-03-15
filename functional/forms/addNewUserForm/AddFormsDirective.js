var myApp = angular.module('AddForms-Directive', ['AddForms-Controller']);

myApp.directive('addUserForms', function(){  
var htmlTemplate="";
htmlTemplate += "		 <div class=\"panel panel-success\">";
htmlTemplate += "			  <div class=\"panel-heading\">";
htmlTemplate += "				<h3 class=\"panel-title\">Add New Table<\/h3>";
htmlTemplate += "			  <\/div>";
htmlTemplate += "			  <div class=\"panel-body\">";
htmlTemplate += "				<div>		";
htmlTemplate += "					<button type=\"btn btn-primary\" class=\"btn btn-primary\" ng-click=\"addForm(nt)\">Add<\/button>";
htmlTemplate += "					<button type=\"btn btn-primary\" class=\"btn btn-primary\" ng-click=\"addFormCancelView()\">Cancle<\/button>";
htmlTemplate += "					<button type=\"btn btn-primary\" class=\"btn btn-primary\" ng-click=\"addEmptyColumn()\">Add Column<\/button>";
htmlTemplate += "				<\/div>";
htmlTemplate += "				<form ng-submit=\"addForm(nt)\" >";
htmlTemplate += "			 		<div class=\"col-lg-8\">";
htmlTemplate += "						<input class=\"form-control\" placeholder=\"Enter Form Name\" type=\"text\" ng-model=\"nt.formName\" required min=\"1\" \/>";
htmlTemplate += "						<input class=\"form-control\" placeholder=\"Enter Created By \" type=\"text\" ng-model=\"nt.createdby\" required min=\"1\" \/>";
htmlTemplate += "						 <!--Dynamic table Form using diffrenent columns and ng-table tag Starts-->";
htmlTemplate += "							<table class='table'>";
htmlTemplate += "							<tbody>";
htmlTemplate += "							<textarea style=\"width: 300px; height: 150px;\" ng-model=\"nt.fields\" ng-list=\"&#10;\" ng-trim=\"false\"><\/textarea>";
htmlTemplate += "							<\/tbody>";
htmlTemplate += "							<\/table>";
htmlTemplate += "						<!--Dynamic table Form using diffrenent columns and ng-table tag Ends-->";
htmlTemplate += "						<!--<textarea ng-model=\"nt.columns\" ng-list=\"&#10;\" ng-trim=\"false\"><\/textarea> -->";
htmlTemplate += "						<pre>{{ nt | json }}<\/pre>                  ";
htmlTemplate += "					<\/div>";
htmlTemplate += "				<\/form>				";
htmlTemplate += "			 <\/div>";
htmlTemplate += "		<\/div>";


  return {
    restrict: 'EA', 
	scope: { url: '@', // if it is a object substitution
			columns: '=',
			 },	 
	 controller:"AddFormsController",		
     template: htmlTemplate   
  };
});