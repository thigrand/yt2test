'use strict';
function youtubeVideo($http, $q, objectNeutralizer) {
	var YOUR_API_KEY = 'AIzaSyDEnxwjeXJlBJ5aDvVT1IO5swoHZkl6E9s',
		BASE_API_URL = 'https://www.googleapis.com/youtube/v3/videos?id=',
		AUTORISATION_KEY = '&key=',
		API_FILTER = '&part=snippet,statistics';
	var kind = 'youtube';

	return {
		get: get,
		isValid: isValid,
		kind: kind
	};

	function get(id) {
		var deferred = $q.defer();

		$http.get(BASE_API_URL + id + AUTORISATION_KEY + YOUR_API_KEY + API_FILTER)
			.success(function(data) {

				try{
					var videoObject = JSON.parse(JSON.stringify(data));
					deferred.resolve(objectNeutralizer.transformYouTubeObject(videoObject));
				} catch(e ) {
					alert('YT API nie zwraca obiektu');
				}

			})
			.error(function() {
				alert('Jakiś błąd pobrania danych z youtube');
			});

		return deferred.promise;
	}
	function isValid(id) {
		return /[a-zA-Z0-9_-]{11}/i.test(id);
	}
}
angular.module('videoModule').factory('youtubeVideo', ['$http','$q', 'objectNeutralizer', youtubeVideo]);


