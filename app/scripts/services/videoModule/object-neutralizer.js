'use strict';

function objectNeutralizer() {

    function transformVimeoObject(videoObject) {
        var simpleObject = {
            source: 'vimeo',
            favorite: false,
            id: videoObject[0].id,
            name: videoObject[0].title,
            viewCount: videoObject[0].stats_number_of_plays,
            likesCount: videoObject[0].stats_number_of_likes,
            thumbnail: videoObject[0].thumbnail_medium,
            baseUrl: 'https://player.vimeo.com/video/',
            playerUrl: 'https://player.vimeo.com/video/' + videoObject[0].id
        };
        return simpleObject;
    }

    function transformYouTubeObject(videoObject) {
        if (!videoObject.items[0].id)
          throw "GetDataError";
        var simpleObject = {
            source: 'youtube',
            favorite: false,
            id: videoObject.items[0].id,
            name: videoObject.items[0].snippet.title,
            viewCount: videoObject.items[0].statistics.viewCount,
            likesCount: videoObject.items[0].statistics.likeCount,
            thumbnail: videoObject.items[0].snippet.thumbnails.medium.url,
            baseUrl: 'http://www.youtube.com/embed/',
            playerUrl: 'http://www.youtube.com/embed/' + videoObject.items[0].id
        };
        return simpleObject;
    }

    return {
        transformYouTubeObject: transformYouTubeObject,
        transformVimeoObject: transformVimeoObject
    };
}
angular.module('videoModule').factory('objectNeutralizer', [objectNeutralizer]);

    // function getData(data) {

    //     var arrayOfVideosObjects = [];
    //     for (var i = 0; i < data.length; i++) {

    //         if (data[i].pageInfo) {
    //             arrayOfVideosObjects.push(transformYouTubeObject(data[i]));
    //         } else {
    //             arrayOfVideosObjects.push(transformVimeoObject(data[i]));
    //         }
    //     }
    //     return arrayOfVideosObjects;
    // }