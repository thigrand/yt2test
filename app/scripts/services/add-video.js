'use strict';
function addVideo(storage, checkAnchor) {

	var lastLsNumber = 1 + Number(storage.getLastKeyNumber()) || 1;
	var ytUrlIds = [];
	function add(ytUrl) {			


		var idFromUrl = checkAnchor.checkUrl(ytUrl);
		if (idFromUrl !== -1) {
			ytUrlIds.push(idFromUrl);
			storage.setStorage(lastLsNumber++, idFromUrl);

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