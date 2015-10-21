'use strict';

function checkAnchor(validator, $q) {

	var vendorObj = {
		vendor: undefined,
		id: undefined
	};
	var VIMEO_REGEX = 'vimeo';
	var YOUTUBE_REGEX = 'youtu';
	var deferred = $q.defer();

	function checkUrl(url) {
    var vendors = [VIMEO_REGEX, YOUTUBE_REGEX];

    if(isID(url)) {
    	vendorObj.vendor = checkID(url);
    	if(vendorObj.vendor)
    		vendorObj.id = url;
    } else {

    	vendors.some(function(temp) {
        var reg = new RegExp(temp);
        if(reg.test(url))
        	vendorObj.vendor = temp;
        return reg.test(url);	
    	})

    	takeIdFromUrl(url);
    }


    var result = vendorObj.vendor ? vendorObj : -1;

    deferred.resolve(result);
    return deferred.promise;
	}


	function isID(url){
		return url.length < 12 && url.length >6 ? true : false;
	}
	function checkID(url){
		return validator.type(url);
	}

	function takeIdFromUrl(url) {

		if(vendorObj.vendor === 'vimeo') {
			vendorObj.id = url.substring(18, 27);
		}
		if(vendorObj.vendor === 'youtu'){
			if (url.substring(0, 17) === 'https://youtu.be/') {
				vendorObj.id = url.substring(17, 28);
			}
			if (url.substring(0, 24) === 'https://www.youtube.com/') {
				vendorObj.id = url.split('v=')[1];
				var ampersandPosition = vendorObj.id.indexOf('&'); //to
				if (ampersandPosition !== -1) {
					vendorObj.id = vendorObj.id.substring(0, ampersandPosition);
				}
			}
		}
	}



	return {
		checkUrl: checkUrl,
	};
}
angular.module('ytApp').factory('checkAnchor', ['validator', '$q', checkAnchor]);


	// var checkUrl = function(url) {
	// 	var goodUrl = -1;
	// 	var reg = new RegExp('^[0-9]+$');
	// 	if (url.length === 11) {
	// 		goodUrl = url;
	// 	}
	// 	if (url.length >= 11 && url.substring(0, 17) === 'https://youtu.be/') {
	// 		goodUrl = takeIdFromUrl(url, 2);
	// 	}
	// 	if (url.length >= 11 && url.substring(0, 24) === 'https://www.youtube.com/') {
	// 		goodUrl = takeIdFromUrl(url, 3);
	// 	}
	// 	if ((url.length < 11) && reg.test(url)) { //vimeoid
	// 		goodUrl = url;
	// 	}
	// 	if (url.length >= 11 && url.substring(0, 18) === 'https://vimeo.com/') {
	// 		goodUrl = takeIdFromUrl(url, 5);
	// 	}

	// 	return (goodUrl) ? goodUrl : -1;
	// };
	// var takeIdFromUrl = function(url, switcher) {
	// 	var videoId = '';

	// 	if (switcher === 1) {
	// 		videoId = url;
	// 	}
	// 	if (switcher === 2) {
	// 		videoId = url.substring(17, 28);
	// 	}
	// 	if (switcher === 3) {
	// 		videoId = url.split('v=')[1];
	// 		var ampersandPosition = videoId.indexOf('&'); //to
	// 		if (ampersandPosition !== -1) {
	// 			videoId = videoId.substring(0, ampersandPosition);
	// 		}
	// 	}
	// 	if (switcher === 5) {
	// 		videoId = url.substring(18, 27);
	// 	}
	// 		return (videoId) ? videoId : -1;
	// };

