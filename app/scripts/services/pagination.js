'use strict';

function pagination() {

	var boxPerPage = 10;

	var getArrayForView = function(arrayOfAllVideos, currentPage) {
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
angular.module('ytApp').factory('pagination', [pagination]);