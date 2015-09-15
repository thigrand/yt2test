'use strict';

/**
 * @ngdoc function
 * @name ytApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ytApp
 */
function MainCtrl(objectNeutralizer, videoData, storage, videoData2, checkAnchor, pagination) {


	var main = this;
	main.ytUrl = ''; //take value from input
	main.ytUrlIds = storage.getIdsFromStorage();
	main.videoObjects = [];
	main.currentVideoPage = [];

// console.log(main.ytUrlIds, "ytUrlIds");

	function getData(id) {
		
		videoData2.getData(id)
		// videoData.getData(main.ytUrlIds)
		.then(function(data) {
			main.videoObjects = objectNeutralizer.getData(data);
			main.currentVideoPage = pagination.getArrayForView(main.videoObjects, currentPage);// || objectNeutralizer.getData(data);
			// console.log(main.videoObjects);
			// console.log( main.currentVideoPage);
		});
	};
	
	for(var i = 0 ; i < main.ytUrlIds.length ; i++) {
		//console.log(main.ytUrlIds[i])
		getData(main.ytUrlIds[i]);
	}

	

var currentPage = 0;
	main.lastLsNumber = 1 + Number(storage.getLastKeyNumber()) || 1;
	main.addVideo = function() {

		var idFromUrl = checkAnchor.checkUrl(main.ytUrl);
		

		if (idFromUrl !== -1) {
			main.ytUrlIds.push(idFromUrl);
			storage.setStorage(main.lastLsNumber++, idFromUrl);

			getData(idFromUrl);
			

		} else {
			alert('Błędny adres linka.');
			console.log('błąd');
		}

	};



}
angular
.module('ytApp')
.controller('MainCtrl', ['objectNeutralizer', 'videoData', 'storage', 'videoData2', 'checkAnchor', 'pagination', MainCtrl]);
// angular.module('ytApp').controller('MainCtrl', ['$scope', '$log',  MainCtrl]);

