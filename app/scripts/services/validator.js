'use strict';
function validator(vimeoVideo, youtubeVideo) {

	function type(id){
		
		var videos = [youtubeVideo, vimeoVideo];
		var video;
		
		videos.some(function(temp) {
				// console.log(id, "id");
				// console.log(temp, "temp");
				// console.log(temp.isValid(id))
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
angular.module('youtubeModule').factory('validator', ['vimeoVideo', 'youtubeVideo', validator]);
