    angular.module('myApp')
    .controller('selectController', function($scope, APIservice) {
        
        APIservice.getData().then(function(response) {
            $scope.users = response.data;
        });

        $scope.selectedUser= $scope.users;
        
    })
    .controller('userController', function($scope) {
        
       
        $scope.singleUser= $scope.users;
        
    })
