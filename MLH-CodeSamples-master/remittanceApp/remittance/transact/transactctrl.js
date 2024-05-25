angular.module('myApp')
    .controller('TransactCtrl', ['$scope', '$rootScope','$location','transactSvc', TransactCtrl]);
        function TransactCtrl($scope,$rootScope,$location,transactSvc) {
            $rootScope.isActive = true;
            $scope.btnActive = false;
            var array = [];
             
            
            

            $scope.benefclick = function (bank,index) {
                $scope.btnActive = true;
                $scope.selectedRow = index;
                $rootScope.selected_accountno = bank.accountno;
                $rootScope.selected_homebranch = bank.homebranch;
                $rootScope.selected_ifsc = bank.ifsc;
                $rootScope.selected_name = bank.name;
                $scope.proceed = function () {
                    $location.path('/details');
                }              
            }

            transactSvc.testMethod().then(
                function (response) {
                    console.log("Entered into transact ctrl "+response.result.data.data[0].name);
                    array = response.result.data.data;
                    $scope.banks = array;
                    
                    console.log("banks", $scope.banks)
                }, function (reason) {
                    alert(reason);
                    alert("error in transact");
                });





            //const array = [
            //    {
            //        name: "Roger Federer",

            //        accountno: 48124792384123,
            //        balance: 2342342,
            //        homebranch: "Erie",
            //        ifsc: "32412JHJ4"
            //    },
            //    {
            //        name: "Sinson Francis",

            //        accountno: 363462436247923,
            //        balance: 2342342324,
            //        homebranch: "Mala",
            //        ifsc: "32412ABHJ4"

            //    }

            //]

            
        }



   