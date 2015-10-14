'use strict';

function videoCaster($mdDialog, pagination, $stateParams, videoStorage, favorite) {
	var vidcast              = this;
	vidcast.ytUrl            = ''; //take value from input
	vidcast.ytUrlIds         = videoStorage.getIdsFromStorage('videos') || [];
	vidcast.videoObjects     = [];
	vidcast.currentVideoPage = [];
	vidcast.showFavorite;
	
	vidcast.videoToPlay      = urlForPlayer();
	vidcast.changeFavorite   = favorite.changeFavorite;//changeFavorite;
	vidcast.play             = play;
	vidcast.showModal        = showModal;
	vidcast.boxAmount        = [4, 12, 24];
	vidcast.boxPerPage       = 12;
	var videoObject          = "";
	vidcast.loadFilteredPage = loadFilteredPage;



  function showModal(ev, videoObject) {

    $mdDialog.show({
      controller: DialogController,
      controllerAs: 'dialog',
      templateUrl: 'views/modal-template.html',
      // parent: angular.element(document.body), Jak na moje nie potrzebne
      targetEvent: ev,
      clickOutsideToClose:true,
      locals: {
      	videoObject: videoObject
      }
    })
    .then(function(answer) {
    	console.log("hallo")
    }, function() {
      console.log("za hallo w morde walo")
    });
  };

	function loadFilteredPage(boxPerPage) {
		vidcast.currentVideoPage = pagination.getArrayForView(currentPage, boxPerPage);
	}



	var currentPage  = 0;
	var videosAmount = vidcast.ytUrlIds.length;
	var pagesAmount  = window.Math.floor(videosAmount / vidcast.boxPerPage) + 1;
	vidcast.incrementPage = incrementPage;
	vidcast.decrementPage = decrementPage;

	function incrementPage() {
		if (currentPage < pagesAmount) {
			currentPage++;
			console.log('main.boxPerPage', main.boxPerPage);
			vidcast.currentVideoPage = pagination.getArrayForView(currentPage, vidcast.boxPerPage);
		}
	};

	function decrementPage() {
		if (currentPage > 0) {
			currentPage--;
			vidcast.currentVideoPage = pagination.getArrayForView(currentPage, vidcast.boxPerPage);
		}
	};

	function urlForPlayer() {
		var url;

		if ($stateParams.source === 'youtube') {
			url = 'http://www.youtube.com/embed/' + $stateParams.id;
		} else {
			url = 'https://player.vimeo.com/video/' + $stateParams.id;
		}
		return url;
	}
	
	function play(url) {
		vidcast.videoToPlay = url;
		return url;
	};

	function numbersComparator(a, b) {
		return a - b;
	};

}
angular
	.module('ytApp')
	.controller('videoCaster', ['$mdDialog', 'pagination', '$stateParams', 'videoStorage', 'favorite', videoCaster]);

	// function changeFavorite(object){
	// 	favorite.changeFavorite(object);
	// 	// vidcast.currentVideoPage = pagination.getArrayForView(currentPage);
	// }

	// 	vidcast.closeBox = function(boxIndex) {
	// 	// var keysOfStorage = localStorageService.keys().sort(numbersComparator);
	// 	// localStorageService.remove(keysOfStorage[boxIndex]);
	// 	// vidcast.ytUrlIds = storage.getIdsFromStorage();
	// 	var oldArray = videoStorage.loadArrayFromStorage('idsArray');
	// 	var newArray = [];
	// 	// console.log(boxIndex, "oldArray", oldArray);
	// 	newArray = videoStorage.removeElement(oldArray, boxIndex);
	// 	// console.log("newArray", newArray)
	// 	vidcast.ytUrlIds = newArray;
	// };