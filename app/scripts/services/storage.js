'use strict';
function storage(localStorageService) {

	var numbersComparator = function (a, b) {
	    return a - b;
	};
	var getIdsFromStorage = function () {
		//wez wszystkie elementy ze storage i przypisz do nowej 
		var idsFromStorage = [];
		var keysOfStorage = localStorageService.keys().sort(numbersComparator);
		//console.log(localStorageService.keys(), "localStorageService.keys()");
		for(var key in keysOfStorage) { //key 
			idsFromStorage.push(localStorageService.get(keysOfStorage[key]));
			//console.log(localStorageService.get(keysOfStorage[key]), "localStorageService.get(keysOfStorage[key])");
		}					
		return idsFromStorage;
	};	

	var setStorage = function (key, val) {
		return localStorageService.set(key, val);
	};

	var getLastKeyNumber = function () {
		var keysOfStorage = localStorageService.keys().sort(numbersComparator);
		//console.log(keysOfStorage[keysOfStorage.length-1]);
		return keysOfStorage[keysOfStorage.length-1];
	};

	return {
		getLastKeyNumber : getLastKeyNumber,
		getIdsFromStorage : getIdsFromStorage,
		setStorage : setStorage
	};
}
angular.module('ytApp').factory('storage', ['localStorageService', storage]);