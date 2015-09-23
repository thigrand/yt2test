'use strict';

function favorite(videoStorage) {
	var objectsArray = videoStorage.loadArrayFromStorage('videos');


	function showFavorites(){
		// objectsArray       = videoStorage.loadArrayFromStorage('videos');
		var favoritesArray = objectsArray.filter(function(obj){
			return obj.favorite === true;
		})
		console.log('favoritesArray', favoritesArray);
		return favoritesArray;
	}
	function addToFavorites(obj){
		objectsArray = videoStorage.loadArrayFromStorage('videos');
		objectsArray.forEach(function(element){
			if(element.id === obj.id){
				console.log("add to favorites", obj.id);
				element.favorite = true;
			};
		});
		console.log("objectsArray", objectsArray);
		videoStorage.saveArrayToStorage('videos', objectsArray);
	}

	function removeFromFavorites(obj) {
		objectsArray = videoStorage.loadArrayFromStorage('videos');
		objectsArray.forEach(function(element){
			if(element.id === obj.id){
				console.log("remove from favorites", obj.id);
				element.favorite = false;
			};
		});
		videoStorage.saveArrayToStorage('videos', objectsArray);
	}
	function changeFavorite(obj){
		objectsArray = videoStorage.loadArrayFromStorage('videos');
		objectsArray.forEach(function(element){
			if(element.id === obj.id){
				console.log("change favorites", obj.id);
				element.favorite = (element.favorite === true) ? false : true;
			};
		});
		videoStorage.saveArrayToStorage('videos', objectsArray);
		console.log(showFavorites());
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
