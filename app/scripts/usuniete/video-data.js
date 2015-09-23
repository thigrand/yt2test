'use strict';

function videoData($http, $q) {

	var YOUR_API_KEY = 'AIzaSyDEnxwjeXJlBJ5aDvVT1IO5swoHZkl6E9s';

	function getDataFromYT(id) {
		var deferred = $q.defer();
		// $http.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLSTz8jpJdr5qrbVEburBasItcSBO43xPv&key='+YOUR_API_KEY+'').
		// 	success(function(data) {
		// 		console.log(data);
		// 	var videoObject = JSON.parse(JSON.stringify(data));

		// 	deferred.resolve(videoObject);
		// }).
		// error(function(data) {
		// 	alert("Jakiś błąd pobrania danych z youtube");
		// });
		if (id.length === 11) {
			// $http.get('https://gdata.youtube.com/feeds/api/videos/'+id+'?v=2&alt=json').

			$http.get('https://www.googleapis.com/youtube/v3/videos?id=' + id + '&key=' + YOUR_API_KEY + '&part=snippet,statistics').
			success(function(data) {
				// console.log(data);
				var videoObject = JSON.parse(JSON.stringify(data));
				//var videoObject = data;
				deferred.resolve(videoObject);
			}).
			error(function() {
				alert('Jakiś błąd pobrania danych z youtube');
			});
		}
		if (id.length === 9 || id.length === 9) {

			$http.jsonp('http://vimeo.com/api/v2/video/' + id + '.json?callback=JSON_CALLBACK'). //'https://api.vimeo.com/'+id+'').//.json?callback=JSON_CALLBACK&_=' + (new Date().getTime())
			success(function(data) {
				var videoObject = JSON.parse(JSON.stringify(data));
				// console.log(data);
				//var videoObject = data;
				deferred.resolve(videoObject);
			}).
			error(function() {
				alert('Jakiś błąd pobrania danych z vimeo');
			});
		}


		return deferred.promise;
	}


	function getData(videosID) {
		var videoObjects = [];

		for (var i = 0; i < videosID.length; i++) {
			videoObjects.push(getDataFromYT(videosID[i]));
			//videoObjects.push("getDataFromYT(videosID[i])");
		}
		return $q.all(videoObjects);
	}

	return {
		getData: getData
	};
}
angular.module('ytApp').factory('videoData', ['$http', '$q', videoData]);