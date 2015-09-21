'use strict';

function videoCaster(storage, pagination, localStorageService, $stateParams, videoStorage, favorite) {
	var vidcast              = this;
	vidcast.ytUrl            = ''; //take value from input
	vidcast.ytUrlIds         = storage.getIdsFromStorage();
	vidcast.videoObjects     = [];
	vidcast.currentVideoPage = [];
	vidcast.favoriteButton   = 'Dodaj do ulubionych';
	
	// vidcast.removeAction(5);
	vidcast.videoToPlay      = urlForPlayer();
	vidcast.addToFavorite    = addToFavorite;

	vidcast.play = function(url) {
		vidcast.videoToPlay = url;
		return url;
	};

	function addToFavorite(object) {
		favorite.addToFavorite(object);
		if(object.favorite === true) {
			vidcast.favoriteButton = 'Usuń z ulubionych';
		} else{
			vidcast.favoriteButton   = 'Dodaj do ulubionych';
		}
	}

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
		// var keysOfStorage = localStorageService.keys().sort(numbersComparator);
		// localStorageService.remove(keysOfStorage[boxIndex]);
		// vidcast.ytUrlIds = storage.getIdsFromStorage();
		var oldArray = videoStorage.loadArrayFromStorage('idsArray');
		var newArray = [];
		// console.log(boxIndex, "oldArray", oldArray);
		newArray = videoStorage.removeElement(oldArray, boxIndex);
		// console.log("newArray", newArray)
		vidcast.ytUrlIds = newArray;
	};

		var currentPage  = 0;
		var videosAmount = vidcast.ytUrlIds.length;
		var boxPerPage   = 10;
		var pagesAmount  = window.Math.floor(videosAmount / boxPerPage) + 1;

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
	.controller('videoCaster', ['storage', 'pagination', 'localStorageService', '$stateParams', 'videoStorage', 'favorite', videoCaster]);