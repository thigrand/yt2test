'use strict';
function DialogController($mdDialog, videoObject, favorite ) {

	var dialog = this;
	dialog.video = videoObject;
	dialog.changeFavorite   = favorite.changeFavorite;

	dialog.cancel = function() {
		console.log("cancel?");
		$mdDialog.cancel();
	};


	// dialog.answer = function(answer) {
	// 	$mdDialog.hide(answer);
	// };

	// dialog.hide = function() {
	// 	$mdDialog.hide();
	// };
}
angular
	.module('ytApp')
	.controller('DialogController', ['$mdDialog', 'videoObject', 'favorite', DialogController]);