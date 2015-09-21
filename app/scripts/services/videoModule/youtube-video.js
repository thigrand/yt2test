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
				var videoObject = JSON.parse(JSON.stringify(data));
				deferred.resolve(objectNeutralizer.transformYouTubeObject(videoObject));
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



	// function transformYouTubeObject(videoObject) {
	// 	var simpleObject = {
	// 		source : 'youtube',
	// 		id : videoObject.items[0].id,
	// 		name : videoObject.items[0].snippet.title,
	// 		viewCount : videoObject.items[0].statistics.viewCount,
	// 		likesCount : videoObject.items[0].statistics.likeCount,
	// 		thumbnail : videoObject.items[0].snippet.thumbnails.standard.url,
	// 		baseUrl : 'http://www.youtube.com/embed/',
	// 		playerUrl : 'http://www.youtube.com/embed/' + videoObject.items[0].id
	// 	};
	// 	return simpleObject;
	// }