'use strict';

function displayGallery() {
	return {
		templateUrl: 'views/gallery.html',
		scope: {
			// ytUrl: '=',
			// ytUrlIds: '=',
			// videoObject: '=',
			// currentVideoPage: '='
		},
		bindToController: {
			ytUrl: '=',
			ytUrlIds: '=',
			videoObject: '=',
			currentVideoPage: '=',
			removeAction: '=',
			showFavorite: '=',
			filterFavorites: '='
		},
		controller:  'videoCaster as vidcast', 
		link: function() {
	
		}
	};
}
angular
	.module('ytApp')
	.directive('displayGallery', [displayGallery]);
