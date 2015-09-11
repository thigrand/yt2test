'use strict';
function addVideo(storage,checkAnchor) {

	// var getData = function() {
	// 			videoData.getData($scope.ytUrlIds).then(function(data) {
	// 				$scope.videoObjects = objectNeutralizer.getData(data);
	// 				$scope.currentVideoPage = pagination.getArrayForView($scope.videoObjects, currentPage);// || objectNeutralizer.getData(data);
	// 				console.log($scope.videoObjects);
	// 				//console.log($scope.currentVideoPage);
	// 			});
	// 		};

	var lastLsNumber = 1 + Number(storage.getLastKeyNumber()) || 1;
	var ytUrlIds = [];
	function add(ytUrl) {			


		var idFromUrl = checkAnchor.checkUrl(ytUrl);
		if (idFromUrl !== -1) {
			ytUrlIds.push(idFromUrl);
			storage.setStorage(lastLsNumber++, idFromUrl);
			getData();
		} else {
			alert('Błędny adres linka.');
		}

		return ytUrlIds;
	}			

	return {
		add: add
	};
}
angular.module('ytApp').factory('addVideo', ['storage', 'checkAnchor', addVideo]);