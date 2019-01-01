
 (function(){
 	angular
 	.module('myApp')
 	.factory('paginationValidationService',service);
 	function service(){
 		var service ={
 			validate : validate
 		};
 		return service;
 		function validate(value,length){
 			if(value >= 1 && value <= length && value != null){
 				return true;
 			}
 			else{
 				return false;
 			}
 		}
 	}
 })();
