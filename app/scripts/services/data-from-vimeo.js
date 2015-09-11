'use strict';
function dataFromVimeo($http, $q) {
	var BASE_API_URL = 'http://vimeo.com/api/v2/video/',
		API_FILTER = '.json?callback=JSON_CALLBACK';

	function get(id) {
		var deferred = $q.defer();
	    $http.jsonp(BASE_API_URL + id + API_FILTER).//'https://api.vimeo.com/'+id+'').//.json?callback=JSON_CALLBACK&_=' + (new Date().getTime())
		    success(function(data) {
				var videoObject = JSON.parse(JSON.stringify(data));
				// console.log(data);
				deferred.resolve(videoObject);
			}).
			error(function() {
				alert('Jakiś błąd pobrania danych z vimeo');
			});

		return deferred.promise;
	}

	return {
		get: get
	};
}
angular.module('vimeoModule').factory('dataFromVimeo', ['$http','$q', dataFromVimeo]);
