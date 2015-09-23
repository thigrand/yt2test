
'use strict';
function modalPlayer() {
	return {
        replace: true,
        scope: {
            currentObject: '@'
        },
        link: function($scope, element, attrs) {
            // ...
            var index = attrs.index;
            var currentobject = JSON.parse(attrs.currentobject);
            // console.log(index);
            // console.log(currentobject);
            //console.log(currentObject);
            $scope.test = function() {
            	console.log('test');
            };
        }
    };
}
angular.module('ytApp').directive('modalPlayer', [modalPlayer]);