(function () {
    angular.module("myApp")
        .factory("httpSvc", function ($http) {
	    
            var baseURL = "http://localhost:1337/";
        

            return {
                get: function (url, fnSuccess, fnFailure) {
                    console.log("url " + url);
                    
                    $http({ method: "GET", url: baseURL + url })
                        .then(function (data, status, headers, config) {
                            fnSuccess(data, status, headers, config);

                        },
                        function (data, status, headers, config) {
                            fnFailure(data, status, headers, config);
                        });
                },
                post: function (input, fnSuccess, fnFailure) {
                    $http({ method: "POST", url: baseURL + input.url, data: input.param })
                        .then(function (data, status, headers, config) {
                            fnSuccess(data, status, headers, config);
                        },
                        function (data, status, headers, config) {
                            fnFailure(data, status, headers, config);
                        });
                },
                put: function () { },
                delete: function () { },
            };
        });

})();
