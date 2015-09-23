'use strict';
function vimeoVideo($http, $q, objectNeutralizer) {
	var BASE_API_URL = 'http://vimeo.com/api/v2/video/',
		API_FILTER = '.json?callback=JSON_CALLBACK';
	var kind = 'vimeo';

	return {
		get: get,
		isValid: isValid,
		kind: kind
	};

	function get(id) {
		var deferred = $q.defer();
	    $http.jsonp(BASE_API_URL + id + API_FILTER)
		    .success(function(data) {
				var videoObject = JSON.parse(JSON.stringify(data));
				deferred.resolve(objectNeutralizer.transformVimeoObject(videoObject));
			})
			.error(function() {
				alert('Jakiś błąd pobrania danych z vimeo');
			});
		return deferred.promise;
	}
	function isValid(id) {
		return !/[^0-9]/i.test(id);
	}

}
angular.module('videoModule').factory('vimeoVideo', ['$http','$q', 'objectNeutralizer', vimeoVideo]);
