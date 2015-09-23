'use strict';

function pagination(videoStorage) {

	var boxPerPage = 10;
	var objectsArray ;

	var getArrayForView = function(currentPage) {
		objectsArray = videoStorage.loadArrayFromStorage('videos');
		var arrayForView = [],
			iterateFrom = currentPage * boxPerPage,
			iterateTo = iterateFrom + boxPerPage;
		arrayForView = objectsArray.slice(iterateFrom, iterateTo);

		return arrayForView;
	};

	return {
		getArrayForView: getArrayForView
	};
}
angular.module('ytApp').factory('pagination', ['videoStorage', pagination]);