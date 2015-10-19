'use strict';
function DialogController($mdDialog, videoObject, favorite ) {

	var dialog = this;
	dialog.video = videoObject;
	dialog.changeFavorite   = favorite.changeFavorite;

	dialog.cancel = function() {
		$mdDialog.cancel();
	};
}
angular
	.module('ytApp')
	.controller('DialogController', ['$mdDialog', 'videoObject', 'favorite', DialogController]);