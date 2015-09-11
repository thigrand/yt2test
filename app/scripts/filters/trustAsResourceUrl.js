'use strict';

/* Filters */


function trustAsResourceUrl ($sce) {
    return function(val) {
        return $sce.trustAsResourceUrl(val);
    };
}
angular.module('ytApp').filter('trustAsResourceUrl', ['$sce', trustAsResourceUrl]);


