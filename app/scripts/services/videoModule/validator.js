'use strict';
function validator(vimeoVideo, youtubeVideo) {

	function type(id){
		
		var videos = [youtubeVideo, vimeoVideo];
		var video;
		
		videos.some(function(temp) {
			if(temp.isValid(id)) {
				video = temp;
				return true;	
			}
		});
		return video;
	}
	return {
		type: type
	};

}
angular.module('videoModule').factory('validator', ['vimeoVideo', 'youtubeVideo', validator]);
