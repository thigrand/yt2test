'use strict';

function videoStorage(storage) {

	var dataArray = [];

	function saveArrayToStorage(keyName, array) {
		storage.setStorage(keyName, array);
	}

	function loadArrayFromStorage(keyName) {
		dataArray = storage.get(keyName);
		return dataArray;
	}

	function addDataToStorage(keyName, value) {
		dataArray = loadArrayFromStorage(keyName) || [];
		dataArray.push(value);
		saveArrayToStorage(keyName, dataArray);
		return dataArray;
	}

	function removeElement(array, id) { 

		var newArray = array.filter(function(obj){
			return (obj.id !== id);
		})
		saveArrayToStorage('videos', newArray);
		return newArray;
	}

	function getIdsFromStorage(keyName){
		dataArray = dataArray || loadArrayFromStorage(keyName) || [];
		var ids   = dataArray.map(function(element){
			return element.id;
		}) || [];

		return ids;
	}

	return {
		saveArrayToStorage: saveArrayToStorage,
		loadArrayFromStorage: loadArrayFromStorage,
		addDataToStorage: addDataToStorage,
		removeElement: removeElement,
		getIdsFromStorage: getIdsFromStorage
	};
}
angular.module('ytApp').factory('videoStorage', ['storage', videoStorage]);


	// function removeElement(array, index) { 
	// 	var newArray = array.splice(index);
	// 	saveArrayToStorage('idsArray', array)
	// 	return newArray;
	// }