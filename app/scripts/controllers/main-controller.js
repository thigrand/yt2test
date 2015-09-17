'use strict';

function MainCtrl(storage, dataNozzle, checkAnchor, pagination, $q, videoStorage) {

	var main = this;
	var currentPage = 0;

	main.ytUrl = ''; //take value from input
	main.ytUrlIds = storage.getIdsFromStorage();
	main.videoObjects = [];
	main.currentVideoPage = [];
	main.addVideo = addVideo;
	main.lastLsNumber = 1 + parseInt(storage.getLastKeyNumber()) || 1;



	var promisesArray = [];
	main.ytUrlIds.forEach(function(id){
		promisesArray.push(dataNozzle.getData(id));
	});

	$q.all(promisesArray).then(function(result) {
				//videoStorage.saveVideos(result);
				main.videoObjects = result;
				main.currentVideoPage = pagination.getArrayForView(main.videoObjects, currentPage);
	});

	function getData(id) {
		dataNozzle.getData(id)
			.then(function(data) {
				main.videoObjects.push(data);
			});
	}
	//console.log(videoStorage.loadVideos());


	function addVideo() {
		var idFromUrl = checkAnchor.checkUrl(main.ytUrl);

		if (idFromUrl !== -1) {
			main.ytUrlIds.push(idFromUrl);
			storage.setStorage(main.lastLsNumber++, idFromUrl);

			getData(idFromUrl);

		} else {
			alert('Błędny adres linka.');
		}
	}
}
angular
	.module('ytApp')
	.controller('MainCtrl', ['storage', 'dataNozzle', 'checkAnchor', 'pagination', '$q', 'videoStorage', MainCtrl]);