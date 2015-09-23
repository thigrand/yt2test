'use strict';

function dataNozzle($q, vimeoVideo, youtubeVideo, validator) {
	var videoObject = [];

	// var validator = {
	// 	types: {
	// 		isVimeo: {
	// 			validate: vimeoVideo.isValid,
	// 			get: function(id) {
	// 				// console.log('pobieram vimeo');
	// 				return vimeoVideo.get(id);
	// 			}
	// 		},
	// 		isYouTube: {
	// 			validate: youtubeVideo.isValid,
	// 			get: function(id) {
	// 				// console.log('pobieram yt', id);
	// 				return youtubeVideo.get(id);
	// 			}
	// 		}
	// 	},
	// 	messages: [],
	// 	config: {
	// 		vimeo: 'isVimeo',
	// 		yt: 'isYouTube'
	// 	},
	// 	validate: function(data) {
	// 		var i, msg, type, checker, resultOk, isAny;
	// 		this.messages = [];

	// 		type = "";

	// 		isAny = Object.keys(validator.types).some(function(key) {
	// 			type = key;
	// 			return validator.types[key].validate(data);
	// 		});

	// 		checker = this.types[type];

			

	// 		if (!checker) {
	// 			throw {
	// 				name: 'ValidationError',
	// 				message: 'Invalid key ' + type
	// 			};
	// 		}
	// 		resultOk = checker.validate(data);

	// 		if (!resultOk) {
	// 			msg = 'Invalid value *' + i + '*; ' + checker.instuctions;
	// 			this.messages.push(msg);
	// 		}
	// 		return this.types[type]; 

	// 		return this.hasErrors();
	// 	},
	// 	hasErrors: function() {
	// 		return this.messages.length !== 0;
	// 	}
	// };


	function getData(videoId) {

		var type = validator.type(videoId);
		return type.get(videoId);
		// var video = validator.validate(videoId);

		// return video.get(videoId);
	}

	function getAllData(idsArray) {
		var objectsArray = [];
		objectsArray = idsArray.forEach(function(id){
			getData(id);
		})
		return objectsArray;
	}

	return {
		getData: getData,
		getAllData: getAllData
	};
}
angular.module('ytApp').factory('dataNozzle', ['$q', 'vimeoVideo', 'youtubeVideo', 'validator', dataNozzle]);