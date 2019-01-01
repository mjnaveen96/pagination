
(function(){
	angular
	.module('myApp')
	.service('dataFetchService',service);
	function service($http){
		var service = {
			getLength : getLength,
			getData   : getData
		};
		return service;
		function getLength(){
			return dataList.length;
		}
		function getData(start,end){
			$http({
			  	method : 'GET',
			  	url    : 'assets/json/data.json'
			})
			.then(function successCallback(response){
					let dataList = response.data.results;
					for(let i = 0; i < dataList.length; i++){
					    dataList[i].id = (i+1);
					}
			 	}, function errorCallback(response){
			  		let message='error';
			  		console.log(message);
			  	}
			);
			return dataList.slice(start,end);
		}
	}
	service.$inject =['$http']
})();
