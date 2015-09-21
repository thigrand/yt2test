'use strict';

function storage(localStorageService) {

	var getIdsFromStorage = function() {

		var idsFromStorage = [];
		var keysOfStorage  = localStorageService.keys().sort(numbersComparator);
		for (var key in keysOfStorage) { //key 
			idsFromStorage.push(localStorageService.get(keysOfStorage[key]));
		}
		return idsFromStorage;
	};

	var setStorage = function(key, val) {
		return localStorageService.set(key, val);
	};

	var getLastKeyNumber = function() {
		var keysOfStorage = localStorageService.keys().sort(numbersComparator);
		return keysOfStorage[keysOfStorage.length - 1];
	};

	var numbersComparator = function(a, b) {
		return a - b;
	};
	return {
		getLastKeyNumber: getLastKeyNumber,
		getIdsFromStorage: getIdsFromStorage,
		setStorage: setStorage,
		get: localStorageService.get
	};
}
angular.module('ytApp').factory('storage', ['localStorageService', storage]);