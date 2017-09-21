    angular.module('myApp').controller('myController', function($scope, $parse, APIservice) {
        
        APIservice.getData().then(function(response) {
            $scope.users = response.data;
        });

        $scope.myParam = $parse.singleUser;

        
    });
