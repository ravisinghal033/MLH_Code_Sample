(function () {

    var loginManager = angular.module('myApp');
    loginManager.factory("transactSvc", ["$q","$http","httpSvc","$location", function ($q,$http,httpService,$location) {

        var transactService = this;
        transactService.testMethod = function () {
            var defered = $q.defer();

            httpService.get( 'api/transact'  , function (response) {
                console.log("Response from transactsvc "+response.data);
                 defered.resolve({ error: null, result: response });
                }, function (err) {
                    defered.reject({ error: err, result: null });
                });
            return defered.promise;
        };
        return transactService;
    }]);
})();