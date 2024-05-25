

angular.module('myApp')
    .controller('DetailsCtrl', ['$scope', '$http', '$rootScope','$location', DetailsCtrl]);

function DetailsCtrl($scope, $http, $rootScope, $location) {
    $scope.btnActive = false;
    $rootScope.isActive = true;
    
	console.log($rootScope.name);
       $scope.Value = function () {
        $scope.btnActive = true;
        if ($scope.myValue == null) { $scope.btnActive = false; }

    };
        



    }


        
