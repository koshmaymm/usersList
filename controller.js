    angular.module('myApp')
    .controller('selectController', function($scope, APIservice) {
        
        APIservice.getData().then(function(response) {
            $scope.users = response.data;
            $scope.selected = $scope.users[0];
        });
    });
