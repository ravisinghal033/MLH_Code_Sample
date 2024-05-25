//angular.module('myApp', ['ngRoute'])
//    .controller('LoginCtrl', ['$scope', '$http', '$rootScope', 'loginSvc', LoginCtrl]);

angular.module('myApp', ['ngRoute'])
    .controller('LoginCtrl', ['$scope', '$http', '$rootScope', 'loginSvc','$location', LoginCtrl]);

function LoginCtrl($scope, $http, $rootScope, loginSvc, $location) {
    // $scope.message = 'Member Login';
    $rootScope.isActive = false;
    $scope.submit = function () {
        
        console.log('submit clicked');
        
        var em = $scope.email;
        
        var passwd = $scope.password;
        console.log("email is "+em+" password "+passwd);
        loginSvc.testMethod(em, passwd).then(
            function (response) {
                
                var details = response.result.data.data;
                $rootScope.name = details.user_name;
                $rootScope.accountno = details.account_no;
                $rootScope.balance = details.balance;
                $rootScope.homebranch = details.homebranch;
                $rootScope.ifsc = details.ifsc;
                
                console.log("Logged in as " + details.user_name);

                $location.path('/profile');
                },
            function (reason) {
                alert("Authentication Error");
                    console.log('Failed '+reason);
                });
        



    }
}

        
