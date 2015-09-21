'use strict';

angular.module('youtubeModule',[]);
angular.module('videoModule',[]);

angular
  .module('ytApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule',
    'angular-sortable-view',
    'videoModule'

  ])
  .config(function ($stateProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url:'/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'

      })
      .state('video-player', {
        url:'/player/:source/:id',
        templateUrl: 'views/video-player.html',
        controller: 'videoCaster',
        controllerAs: 'vidcast'
      });
      $locationProvider.html5Mode(true);
  });
