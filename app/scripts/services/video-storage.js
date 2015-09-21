'use strict';

function videoStorage(storage) {

	var dataArray;
	function saveArrayToStorage(keyName, array) {
		storage.setStorage(keyName, array);
	}

	function loadArrayFromStorage(keyName) {
		dataArray = storage.get(keyName);
		return dataArray;
	}

	function addDataToStorage(keyName, value) {
		console.log(keyName, value)
		dataArray = loadArrayFromStorage(keyName) || [];
		dataArray.push(value);
		saveArrayToStorage(keyName, dataArray);
		return dataArray;
	}

	// function removeElement(array, index) { 
	// 	var newArray = array.splice(index);
	// 	saveArrayToStorage('idsArray', array)
	// 	return newArray;
	// }
	function removeElement(array, id) { 
		console.log('id', id)
		var newArray = array.filter(function(obj){
			console.log("obj.id", obj.id);
			
			return (obj.id !== id);
		})
		saveArrayToStorage('videos', newArray);
		console.log("newArray", newArray);
		return newArray;
	}

	function getIdsFromStorage(keyName){
		dataArray = dataArray || loadArrayFromStorage(keyName);
		var ids   = dataArray.map(function(element){
			return element.id;
		});
		console.log("ids", ids);
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