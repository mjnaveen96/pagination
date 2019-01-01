
(function(){
	angular
	.module('myApp')
	.controller('mainController',controller);
	function controller($rootScope,$scope,$http){
		// vm - view model
		var vm = this;
		$http({
		  	method : 'GET',
		  	url    : 'assets/json/data.json'
		})
		.then(function successCallback(response){
				vm.dataList = response.data.results;
				for(let i = 0; i < vm.dataList.length; i++){
				    vm.dataList[i].id = (i+1);
				}
		 	}, function errorCallback(response){
		  		vm.message='error';
		  		console.log(vm.message);
		  	}
		);

		$scope.$on('paginationDirectiveResponse',function(event,data){
			vm.tableData =  vm.dataList.slice(data.start,data.end);
		})
	}
	controller.$inject = ['$rootScope','$scope','$http'];
})()
