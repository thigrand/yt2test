'use strict';

function videoStorage(storage) {

	function saveVideos(videosArray) {
		storage.setStorage('videos', JSON.stringify(videosArray));
	}

	function loadVideos() {
		var videosArray = JSON.parse(storage.get('videos'));
		return videosArray;
	}

	return {
		saveVideos: saveVideos,
		loadVideos: loadVideos
	};
}
angular.module('ytApp').factory('videoStorage', ['storage', videoStorage]);