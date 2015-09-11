'use strict';
function pagination(videoData) {

	var boxPerPage = 10;
	// 	ytUrlIds = storage.getIdsFromStorage(),
	// 	currentPage = 0,
	// 	videosAmount = ytUrlIds.length,
	// 	pagesAmount = window.Math.floor(videosAmount / boxPerPage) + 1,
	// 	currentVideoPage = [];

	// var incrementPage = function() {
	// 	console.log(currentPage);
	// 	if (currentPage < pagesAmount) {
	// 		currentPage++;
	// 		currentVideoPage = getArrayForView($scope.videoObjects, currentPage);
	// 	}

	// };
	// var decrementPage = function() {
	// 	if (currentPage > 0) {
	// 		currentPage--;
	// 		currentVideoPage = getArrayForView($scope.videoObjects, currentPage);
	// 	}

	// };

	var getArrayForView = function (arrayOfAllVideos, currentPage) {
		var arrayForView = [],
		iterateFrom = currentPage * boxPerPage,
		iterateTo = iterateFrom + boxPerPage;
		arrayForView = arrayOfAllVideos.slice(iterateFrom, iterateTo);

		return arrayForView;
	};

	return {
		getArrayForView: getArrayForView
	};
}
angular.module('ytApp').factory('pagination', ['videoData', pagination]);