
 (function(){
 	angular
 	.module('myApp')
 	.factory('paginationService',service);
 	function service(){
 		var service = {
 			setPages : setPages
 		};
 		return service;
 		function setPages(totalPages,currentPage){
 			// service business logic goes here!
 			// default
 			let pageNumbersPerPage = 7;
 			let temp;
 			if(totalPages < pageNumbersPerPage){
 				temp = totalPages - 1;
 			}
 			else{
 				temp = pageNumbersPerPage - 1;
 			}
 			for(let i = 1; i <= (totalPages - temp); i++){
 				var array = [];
 				for( let j = 0; j < pageNumbersPerPage; j++){
 					if((i+j) <= totalPages){
 						array.push(i+j);
 					}
 				}
 				// console.log(array);
 				// Math.ceil() omitted here
 				if(currentPage == array[(Math.ceil(pageNumbersPerPage/2))-1]){
 					// page number at middle of page number array
 					// console.log("type 1");
 					// console.log(array);
 					return array;
 				}

 				else if(currentPage <= (array.length/2)){
 					// starting page numbers, near 1
 					// console.log("type 2");
 					// console.log(array);
 					return array;
 				}

 				else if((array[array.length-1] === totalPages)
 							&&
 					(currentPage > (totalPages - (array.length/2)))
 				    ){
 				 	// ending page numbers, near totalPages
 				 	// console.log("type 3");
 				 	// console.log(array);
 					return array;
 				}

 				else if(totalPages <= pageNumbersPerPage){
 					// console.log("type 4");
 					// console.log(array);
 					return array;
 				}
 			}
 		}
 	}
 })();
