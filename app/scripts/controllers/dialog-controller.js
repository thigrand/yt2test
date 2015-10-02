'use strict';
function DialogController($mdDialog, videoObject ) {

	var dialog = this;
	dialog.video = videoObject;

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
	.controller('DialogController', ['$mdDialog', 'videoObject', DialogController]);