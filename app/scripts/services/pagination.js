'use strict';

function pagination(videoStorage) {

	var objectsArray = [];

	function getArrayForView(currentPage, boxPerPage) {
	console.log("boxPerPage",boxPerPage);
		objectsArray        = videoStorage.loadArrayFromStorage('videos') || [];
		var arrayForView    = [],
		iterateFrom         = currentPage * boxPerPage,
		iterateTo           = iterateFrom + boxPerPage;
		arrayForView        = objectsArray.slice(iterateFrom, iterateTo) ;

		return arrayForView;
	};

	return {
		getArrayForView: getArrayForView
	};
}
angular.module('ytApp').factory('pagination', ['videoStorage', pagination]);