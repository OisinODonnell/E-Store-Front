/**
 * Created by oisin on 07/05/2017.
 */

// myApp.controller('StockController', ['$scope', 'DataFactory', 'Common', function ($scope, DataFactory, Common) {
//   $scope.test="";
//   $scope.testMessage="List Stock/Manufacturers/ItemCategories/Reviews ...";
//
// }]);

myApp.controller('StockController', ['DataFactory','$scope', 'Common',
  function ( DataFactory,$scope,Common) {
    let vm = this;
    $scope.test="";
    $scope.testMessage="List Stock/Manufacturers/ItemCategories/Reviews ...";

  }]);
