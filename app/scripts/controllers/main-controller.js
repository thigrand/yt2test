'use strict';

function MainCtrl(dataNozzle, checkAnchor, pagination, videoStorage) {

	var main              = this;
	var currentPage       = 0;
	
	main.ytUrl            = ''; //take value from input
	main.ytUrlIds         = videoStorage.getIdsFromStorage('videos') || [];
	main.videoObjects     = videoStorage.loadArrayFromStorage('videos');
	main.currentVideoPage = [];
	
	main.showFavorite     ;
	main.filterFavorites  = filterFavorites;
	
	main.addVideo         = addVideo;
	main.removeAction     = removeAction;
	main.boxPerPage       = 12;

	// main.filters.favorite = false;

	if(main.ytUrlIds) {
		getAllData(main.ytUrlIds);

	}

	function filterFavorites() {
		if(main.showFavorite === true) {
			main.showFavorite = false;
		} else {
			main.showFavorite = true;
		}
		console.log("main.showFavorite", main.showFavorite);

	}

	function removeAction(id) {
		console.log("removeAction", id);
		videoStorage.removeElement(main.videoObjects, id);
		main.videoObjects = videoStorage.loadArrayFromStorage('videos');
	}

	function getAllData(ids) {
		console.log("ids", ids);
		dataNozzle.getAllData(ids).then(function(result){
			main.videoObjects     = result;
			main.currentVideoPage = pagination.getArrayForView(currentPage, main.boxPerPage);
			console.log('main.boxPerPage', main.boxPerPage);
			console.log('video objects', result);
			videoStorage.saveArrayToStorage('videos', result);
			
		});
	}

	function addVideo() {
		var idFromUrl = checkAnchor.checkUrl(main.ytUrl);
		if (idFromUrl !== -1) {
			dataNozzle.getData(idFromUrl)
			.then(function(data) {
				videoStorage.addDataToStorage('videos', data);
				// main.ytUrlIds = videoStorage.getIdsFromStorage('videos');Nie potrzebne?
				main.videoObjects = videoStorage.loadArrayFromStorage('videos');
				main.currentVideoPage = pagination.getArrayForView(currentPage, main.boxPerPage);

			});
		} else {
			alert('Błędny adres linka.');
		}
	}
}
angular
	.module('ytApp')
	.controller('MainCtrl', ['dataNozzle', 'checkAnchor', 'pagination', 'videoStorage', MainCtrl]);