'use strict';
function checkAnchor() {
	var takeIdFromUrl = function (url, switcher) {
		var videoId = '';

		if(switcher === 1) {
			videoId = url;
		}
		if(switcher === 2) {
			videoId = url.substring(17, 28);
		}
		if(switcher === 3) {
			videoId = url.split('v=')[1];
			var ampersandPosition = videoId.indexOf('&');//to
			if(ampersandPosition !== -1) {
				videoId = videoId.substring(0, ampersandPosition);
			}
		}
		if(switcher === 5) {
			
			videoId = url.substring(18, 27);
		}
		return (videoId )? videoId : -1;
	};
	var checkUrl = function(url) {
		var isGood = url,
			goodUrl = -1;
		var reg = new RegExp('^[0-9]+$');
		if(url.length === 11) { 
			goodUrl = url;
		}
		if(url.length >= 11 && url.substring(0, 17) === 'https://youtu.be/') {
			goodUrl = takeIdFromUrl(url, 2);
		}
		if(url.length >= 11 && url.substring(0, 24) === 'https://www.youtube.com/') {
			goodUrl = takeIdFromUrl(url, 3);
		}
		if((url.length < 11) && reg.test(url)) {//vimeoid
			goodUrl = url;
		}
		if(url.length >= 11 && url.substring(0, 18) === 'https://vimeo.com/') {
			goodUrl = takeIdFromUrl(url, 5);
		}

		return (goodUrl) ? goodUrl : -1;
	};

	// <iframe src="https://player.vimeo.com/video/124876737" width="500" height="309" frameborder="0" 
	// webkitallowfullscreen mozallowfullscreen allowfullscreen>
	// </iframe> 
	// <p>
	// 	<a href="https://vimeo.com/124876737">SHURA | 2SHY</a> from 
	// 	<a href="https://vimeo.com/davidmhelman">david m. helman</a> on 
	// 	<a href="https://vimeo.com">Vimeo</a>.
	// </p>


	return {
		checkUrl : checkUrl
	};
}
angular.module('ytApp').factory('checkAnchor', [ checkAnchor]);