'use strict';

function MainCtrl(dataNozzle, checkAnchor, pagination, videoStorage) {

	var main              = this;
	var currentPage       = 0;
	
	main.ytUrl            = ''; //take value from input
	main.ytUrlIds         = videoStorage.getIdsFromStorage('videos') ;
	main.videoObjects     = videoStorage.loadArrayFromStorage('videos');
	main.currentVideoPage = [];
	
	main.showFavorite     ;
	main.filterFavorites = filterFavorites;
	
	main.addVideo        = addVideo;
	main.removeAction    = removeAction;
	main.boxPerPage      = 12;
	main.isActive        = false;


	if(main.ytUrlIds) {
		getAllData(main.ytUrlIds);

	}

	function filterFavorites() {
		main.isActive     = !main.isActive;
		main.showFavorite = !main.showFavorite;
	}

	function removeAction(id) {
		videoStorage.removeElement(main.videoObjects, id);
		main.videoObjects = videoStorage.loadArrayFromStorage('videos');
		main.currentVideoPage = pagination.getArrayForView(currentPage, main.boxPerPage);
	}

	function getAllData(ids) {
		dataNozzle.getAllData(ids).then(function(result){
			main.videoObjects     = result;
			main.currentVideoPage = pagination.getArrayForView(currentPage, main.boxPerPage);
			videoStorage.saveArrayToStorage('videos', result);
			
		});
	}

	function isUniqueVideo(id){
		main.ytUrlIds = videoStorage.getIdsFromStorage('videos');
		var answer = main.ytUrlIds.some(function(element){
			return element === id;
		});
		return !answer;
	}

	function addVideo() {
		var idFromUrl = "";
		var isUnique = false;

		checkAnchor.checkUrl(main.ytUrl).then(function(result){

			idFromUrl = result.id;
 			isUnique = isUniqueVideo(idFromUrl);

			if (idFromUrl !== -1 && isUnique) {
				dataNozzle.getData(idFromUrl)
				.then(function(data) {
					videoStorage.addDataToStorage('videos', data);
					main.videoObjects = videoStorage.loadArrayFromStorage('videos');
					main.currentVideoPage = pagination.getArrayForView(currentPage, main.boxPerPage);
				});
				} else if(!isUnique){
					alert("Ten film został już dodany");
					main.ytUrl = "";
				} else{
					alert('Błędny adres linka.');
				}

			},function(reason) {
				console.log("nie działa" +  reason);
		});

	}
		// var idFromUrl = checkAnchor.checkUrl(main.ytUrl).id;
		

		

}
angular
	.module('ytApp')
	.controller('MainCtrl', ['dataNozzle', 'checkAnchor', 'pagination', 'videoStorage', MainCtrl]);