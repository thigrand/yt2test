'use strict';

function dataNozzle($q, vimeoVideo, youtubeVideo, validator) {
	
	function getData(videoId) {
		var type = validator.type(videoId);
		console.log(type);
		return type.get(videoId);
	}

	function getAllData(idsArray) {
		var objectsArray = [];

		objectsArray = idsArray.forEach(function(id){
			getData(id);
		});
		return objectsArray;
	}

	return {
		getData: getData,
		getAllData: getAllData
	};
}
angular.module('ytApp').factory('dataNozzle', ['$q', 'vimeoVideo', 'youtubeVideo', 'validator', dataNozzle]);