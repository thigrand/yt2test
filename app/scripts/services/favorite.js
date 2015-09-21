'use strict';

function favorite(videoStorage) {
	var objectsArray;

	function showFavorite(){
		objectsArray       = videoStorage.loadArrayFromStorage('videos');
		var favoritesArray = objectsArray.filter(function(obj){
			return obj.favorite === true;
		})
		console.log(favoritesArray);
		return favoritesArray;
	}
	function addToFavorite(obj){
		objectsArray = videoStorage.loadArrayFromStorage('videos');
		objectsArray.forEach(function(element){
			if(element.id === obj.id){
				console.log(obj.id);
				element.favorite = true;
			};
		});
		console.log("objectsArray", objectsArray);
		videoStorage.saveArrayToStorage('videos', objectsArray);
	}

	return {
		showFavorite: showFavorite,
		addToFavorite: addToFavorite
	};
}
angular.module('ytApp').factory('favorite', ['videoStorage', favorite]);