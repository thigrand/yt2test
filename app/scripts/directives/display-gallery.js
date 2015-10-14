'use strict';

function displayGallery() {
	return {
		templateUrl: 'views/gallery.html',
		scope: {

		},
		bindToController: {
			ytUrl: '=',
			ytUrlIds: '=',
			videoObject: '=',
			currentVideoPage: '=',
			removeAction: '=',
			showFavorite: '=',
			filterFavorites: '=',
			boxPerPage: '='
		},
		controller:  'videoCaster as vidcast', 
		link: function() {
	
		}
	};
}
angular
	.module('ytApp')
	.directive('displayGallery', [displayGallery]);
