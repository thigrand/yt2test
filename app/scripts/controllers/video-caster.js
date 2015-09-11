'use strict';

/**
 * @ngdoc function
 * @name ytApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ytApp
 */
function videoCaster( $http, videoData, storage, videoData2, checkAnchor, objectNeutralizer, pagination, localStorageService, $scope, $stateParams) {
	var vidcast = this;
	vidcast.ytUrl = ''; //take value from input
	vidcast.ytUrlIds = storage.getIdsFromStorage() ;
	vidcast.videoObjects = [];
	vidcast.currentVideoPage = [];

	vidcast.videoToPlay =  urlForPlayer();
	vidcast.play = function (url) {
		vidcast.videoToPlay = url;
		return url;
	};

	function urlForPlayer () {
		var url;
		console.log($stateParams.source, "source");
		console.log($stateParams.id, "id");
		if($stateParams.source === 'youtube') {
			url = 'http://www.youtube.com/embed/' + $stateParams.id;
		} else {
			url = 'https://player.vimeo.com/video/' + $stateParams.id;
		}
		return url;
	}



	vidcast.closeBox = function(boxIndex) {
		var keysOfStorage = localStorageService.keys().sort(numbersComparator);
		localStorageService.remove(keysOfStorage[boxIndex]);
		vidcast.ytUrlIds = storage.getIdsFromStorage();
	};
	var numbersComparator = function(a, b) {
		return a - b;
	};


	var currentPage = 0;
	var videosAmount = vidcast.ytUrlIds.length;
	var boxPerPage = 10,
		pagesAmount = window.Math.floor(videosAmount / boxPerPage) + 1;

	vidcast.incrementPage = function() {
		// console.log(currentPage);
		// console.log(videosAmount);
		// console.log(pagesAmount);
		
		if (currentPage < pagesAmount) {
			currentPage++;
			vidcast.currentVideoPage = pagination.getArrayForView(vidcast.videoObjects, currentPage);
		}
	};
	vidcast.decrementPage = function() {
		if (currentPage > 0) {
			currentPage--;
			vidcast.currentVideoPage = pagination.getArrayForView(vidcast.videoObjects, currentPage);
		}
	};
	


	// function getData() {
	// 	// console.log(vidcast.ytUrlIds, "ytUrlIds");
	// 	videoData2.getData(vidcast.ytUrlIds)
	// 	// videoData.getData(vidcast.ytUrlIds)
	// 	.then(function(data) {
	// 		vidcast.videoObjects = objectNeutralizer.getData(data);
	// 		vidcast.currentVideoPage = pagination.getArrayForView(vidcast.videoObjects, currentPage);// || objectNeutralizer.getData(data);
	// 		// console.log(vidcast.videoObjects);
	// 		// console.log( vidcast.currentVideoPage);
	// 	});
	// };

}
angular
	.module('ytApp')
	.controller('videoCaster', ['$http', 'videoData', 'storage', 'videoData2', 'checkAnchor', 'objectNeutralizer', 'pagination', 'localStorageService', '$scope', '$stateParams', videoCaster]);
// angular.module('ytApp').controller('MainCtrl', ['$vidcast', '$log',  MainCtrl]);

