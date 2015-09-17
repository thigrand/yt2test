'use strict';

function videoCaster(storage, pagination, localStorageService, $stateParams) {
	var vidcast = this;
	vidcast.ytUrl = ''; //take value from input
	vidcast.ytUrlIds = storage.getIdsFromStorage();
	vidcast.videoObjects = [];
	vidcast.currentVideoPage = [];

	vidcast.videoToPlay = urlForPlayer();

	vidcast.play = function(url) {
		vidcast.videoToPlay = url;
		return url;
	};

	function urlForPlayer() {
		var url;

		if ($stateParams.source === 'youtube') {
			url = 'http://www.youtube.com/embed/' + $stateParams.id;
		} else {
			url = 'https://player.vimeo.com/video/' + $stateParams.id;
		}
		return url;
	}

	vidcast.closeBox = function(boxIndex) {
		var keysOfStorage = localStorageService.keys().sort(numbersComparator);
		localStorageService.remove(keysOfStorage[boxIndex]);
		vidcast.ytUrlIds = storage.getIdsFromStorage();
	};

	var currentPage = 0;
	var videosAmount = vidcast.ytUrlIds.length;
	var boxPerPage = 10,
		pagesAmount = window.Math.floor(videosAmount / boxPerPage) + 1;

	vidcast.incrementPage = function() {
		if (currentPage < pagesAmount) {
			currentPage++;
			vidcast.currentVideoPage = pagination.getArrayForView(vidcast.videoObjects, currentPage);
		}
	};
	vidcast.decrementPage = function() {
		if (currentPage > 0) {
			currentPage--;
			vidcast.currentVideoPage = pagination.getArrayForView(vidcast.videoObjects, currentPage);
		}
	};

	var numbersComparator = function(a, b) {
		return a - b;
	};

}
angular
	.module('ytApp')
	.controller('videoCaster', ['storage', 'pagination', 'localStorageService', '$stateParams', videoCaster]);