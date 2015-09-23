'use strict';

function dataNozzle($q, validator) {
	
	function getData(videoId) {
		var type = validator.type(videoId);
		console.log("type", type);
		return type.get(videoId);
	}

	function getAllData(idsArray) {
		var that = this;
		var promisesArray = [];
		idsArray.forEach(function(id){
			promisesArray.push(getData(id));
		});
		return $q.all(promisesArray);
	}

	return {
		getData: getData,
		getAllData: getAllData
	};
}
angular.module('videoModule').factory('dataNozzle', ['$q', 'validator', dataNozzle]);