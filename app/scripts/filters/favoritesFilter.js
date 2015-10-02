'use strict';

function favoritesFilter() {
	return function(videoObject, scope) {
		var showFavorite = scope.vidcast.showFavorite;
		return videoObject.filter(function(element){
			if(showFavorite) {
				if(element.favorite === true) {
					return element;
				}
			} else {
				return element;
			}
		});
	};
}
angular.module('ytApp').filter('favoritesFilter', [ favoritesFilter]);