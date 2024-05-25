(function () {
    



    var app = angular.module("myApp");

    app.config(['$routeProvider',router]);
    function router($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "login/login.html",
                controller: "LoginCtrl",

               
            })

            .when("/profile", {
                templateUrl: "profile/profile.html",
                controller: "ProfileCtrl"
                

            })

            .when("/transact", {
                templateUrl: "transact/transact.html",
                controller: "TransactCtrl"
                

            })

            .when("/details", {
                templateUrl: "details/details.html",
                controller: "DetailsCtrl"


            })

          
        }

})();