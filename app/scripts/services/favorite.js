'use strict';

function favorite(videoStorage) {
	var objectsArray = videoStorage.loadArrayFromStorage('videos');


	function showFavorites(){
		// objectsArray       = videoStorage.loadArrayFromStorage('videos');
		var favoritesArray = objectsArray.filter(function(obj){
			return obj.favorite === true;
		})
		return favoritesArray;
	}

	function addToFavorites(obj){
		objectsArray = videoStorage.loadArrayFromStorage('videos');
		objectsArray.forEach(function(element){
			if(element.id === obj.id){
				element.favorite = true;
			};
		});

		videoStorage.saveArrayToStorage('videos', objectsArray);
		return objectsArray;
	}

	function removeFromFavorites(obj) {
		objectsArray = videoStorage.loadArrayFromStorage('videos');
		objectsArray.forEach(function(element){
			if(element.id === obj.id){
				element.favorite = false;
			};
		});
		videoStorage.saveArrayToStorage('videos', objectsArray);
		return objectsArray;
	}

	function changeFavorite(obj){
		objectsArray = videoStorage.loadArrayFromStorage('videos');
		objectsArray.some(function(element){
			if(element.id === obj.id){
				element.favorite = !element.favorite;
				return true;
			};
		});
		obj.favorite = !obj.favorite;
		videoStorage.saveArrayToStorage('videos', objectsArray);

	}

	return {
		showFavorites: showFavorites,
		addToFavorites: addToFavorites,
		removeFromFavorites: removeFromFavorites,
		changeFavorite: changeFavorite
	};
}
angular.module('ytApp').factory('favorite', ['videoStorage', favorite]);

	// function getFavoritesVideos() {
	// 	var favorites = objectsArray.filter(function(element){
	// 		return element.favorite === true;
	// 	})
	// 	return favorites;
	// }
