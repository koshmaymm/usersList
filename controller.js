angular.module('myApp')
    .controller('selectController', function($scope, APIservice) {
        APIservice.getData().then(function(response) {
            $scope.users = response.data;
        });
    })
    .controller('userController', function($scope, APIservice) {
        APIservice.getData().then(function(response) {
            $scope.users = response.data;
        });
    })