'use strict';

/**
 * @ngdoc function
 * @name ytApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ytApp
 */
function test( $http, videoData, storage, videoData2, checkAnchor, objectNeutralizer, pagination, localStorageService) {
// function MainCtrl($vidcast, $log) {

	var test = this;
	test.ytUrl = ''; //take value from input
	test.ytUrlIds = storage.getIdsFromStorage();
	test.videoObjects = [];
	test.currentVideoPage = [];


	var currentPage = 0;
	var getData = function() {
		
		videoData.getData(test.ytUrlIds).then(function(data) {
			test.videoObjects = objectNeutralizer.getData(data);
			test.currentVideoPage = pagination.getArrayForView(test.videoObjects, currentPage);// || objectNeutralizer.getData(data);
			// console.log(test.videoObjects);
			// console.log( test.currentVideoPage);
		});
	};
	getData();

	test.lastLsNumber = 1 + Number(storage.getLastKeyNumber()) || 1;
	test.addVideo = function() {
		console.log('start');
		var idFromUrl = checkAnchor.checkUrl(test.ytUrl);
		console.log(test.ytUrlIds.length);
		if (idFromUrl !== -1) {
			test.ytUrlIds.push(idFromUrl);
			storage.setStorage(test.lastLsNumber++, idFromUrl);

			getData();
			
			console.log('ogarniam film');
		} else {
			alert('Błędny adres linka.');
			console.log('błąd');
		}
		console.log('koniec');
		console.log(test.ytUrlIds.length);
	};
	

}
angular
	.module('ytApp')
	.controller('test', ['$http', 'videoData', 'storage', 'videoData2', 'checkAnchor', 'objectNeutralizer', 'pagination', 'localStorageService', test]);
// angular.module('ytApp').controller('MainCtrl', ['$vidcast', '$log',  MainCtrl]);

