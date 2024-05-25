angular.module('myApp')
    .controller('ProfileCtrl', ['$scope', '$rootScope', ProfileCtrl]);

function ProfileCtrl($scope, $rootScope) {
    console.log('Profile controller reached');
            $rootScope.isActive = true;
            $scope.name = $rootScope.name;
            $scope.accountno = $rootScope.accountno;
            $scope.balance = $rootScope.balance;
            $scope.homebranch = $rootScope.homebranch;
            
        }
  


