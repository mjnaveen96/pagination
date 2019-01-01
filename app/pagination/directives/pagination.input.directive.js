
(function(){
	angular
	.module('myApp')
	.directive('onlyDigit',directive);
	function directive(){
		let directive = {
			link: link,
			restrict: `EA`
		}
		return directive;
		function link(scope,element,attrs,ctrl){
			element.on('keydown',function(event){
				if(event.shiftKey){
					event.preventDefault();
					return false;
				}

				if([8,13,27,37,38,39,40].indexOf(event.which) >- 1){
					return true;
				}else if(event.which >= 48 && event.which <= 57){
					return true;
				}else if(event.which >= 96 && event.which <+ 105){
					return true;
				}else{
					event.preventDefault();
					return false;
				}
			});
		}
	}

})();
