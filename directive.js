    angular.module('myApp')
    .directive("myDatauser", function() {
        return {
            restrict: 'E',
            templateUrl: 'dataOfUser.html'
        };
    })
