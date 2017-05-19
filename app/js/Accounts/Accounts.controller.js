/**
 * Created by oisin on 07/05/2017.
 */
  // let vm = this;
  // $scope.test="";
  // $scope.testMessage="List Accounts/Sessions ...";

  // myApp.controller('AccountsController', ['$scope', 'DataFactory','Common',
  //   function ($scope, DataFactory, Common) {

  myApp.controller('AccountsController', ['DataFactory','$scope','Common',
    function ( DataFactory,$scope,Common) {
      let vm = this;
      $scope.test="";
      $scope.testMessage="List Accounts/Sessions ...";


    }]);



