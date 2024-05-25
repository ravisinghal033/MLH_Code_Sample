(function () {

    var loginManager = angular.module('myApp');
    loginManager.factory("loginSvc", ["$q","$http","httpSvc","$location", function ($q,$http,httpService,$location) {

        var loginService = this;
        loginService.testMethod = function (em, passwd) {
            var defered = $q.defer();
            console.log("Inside svc \n " + em + "\n " + passwd);
            var data = {
                email: em,
                password: passwd,
            };
            

            httpService.post({ url: 'api/login', param: data }, function (response) {
                
                console.log(response);
                
                   defered.resolve({ error: null, result: response });
                }, function (err) {
                    defered.reject({ error: err, result: null });
                });
            return defered.promise;
        };
                
 
         
          
        return loginService;
    }]);
})();
