
(function(){
	angular
	.module('myApp')
	.directive('fsMyappPagination',directive);
	function directive(pager,validator){
		let directive = {
			link : link,
			templateUrl : `app/pagination/templates/pagination.template.html`,
			restrict : `EA`,
			scope : { config : "=" , id : "@" }
		}
		return directive;
		function link(scope,element,attrs,ctrl){

			// default
			scope.itemsPerPage        = 7;
			scope.onPage              = 1;

			scope.$watch('config',function(){
				if(scope.config){

					// directive body is here
					scope.totalPages = Math.ceil(scope.config / scope.itemsPerPage);
					scope.$watch('onPage',function(){
						scope.currentPage = scope.onPage;
						changePageConfig();
					});

					var buttons = document.getElementsByClassName("navigation_input");

					// for recieving input from items per page
					buttons[0].addEventListener("keyup",function(event){
						event.preventDefault();
						if(event.keyCode === 13){
							if(validator.validate(scope.itemsPerPage,scope.config)){
								scope.totalPages = Math.ceil(scope.config / scope.itemsPerPage);
								if(scope.onPage > scope.totalPages){
									scope.onPage = 1;
								}
								changePageConfig();
								scope.$apply();
							}
						}
					});

					// for receiving input from jump to
					buttons[1].addEventListener("keyup",function(event){
						event.preventDefault();
						if(event.keyCode === 13){
							if(validator.validate(scope.currentPage,scope.totalPages)){
								scope.onPage = scope.currentPage;
								scope.$apply();
							}
						}
					});

					function changePageConfig(){
						let pageStartItem     = ((scope.onPage - 1) * (scope.itemsPerPage));
						let pageEndItem       = (pageStartItem)+(scope.itemsPerPage);
						let responseObj       = {"start":pageStartItem,"end":pageEndItem};
						scope.$emit('paginationDirectiveResponse',responseObj);
						scope.pageNumberArray = pager.setPages(scope.totalPages,scope.onPage);
					}

					scope.getPrevPage = getPrevPage;
					scope.getNextPage = getNextPage;
					scope.getPage     = getPage;

					function getPage(page){
						scope.onPage = page;
					}

					function getPrevPage(){
						if(scope.onPage > 1){
							scope.onPage--;
						}
					}

					function getNextPage(){
						if(scope.onPage < scope.totalPages){
							scope.onPage++;
						}
					}
			    }
			});

		}

	}
	directive.$inject = ['paginationService','paginationValidationService'];
})()
