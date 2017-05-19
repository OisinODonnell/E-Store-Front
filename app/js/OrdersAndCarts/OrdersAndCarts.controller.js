/**
 * Created by oisin on 07/05/2017.
 */

myApp.controller('OrdersAndCartsController', ['$scope', 'DataFactory', 'Common', function ($scope, DataFactory, Common) {

  $scope.test="";
  $scope.testMessage="List Carts/Order/Items ...";

//  CreateOrder, ConfirmOrder, CancelOrder, GoBackShopping
//  CreateCart, AddCartItem, ReviewCart,
  $scope.cart = new Cart();
  $scope.order = new Order();
  $scope.orders = [];
  $scope.carts = [];
  $scope.orderItems = [];
  $scope.cartItems = [];


  (function() { // initialise carts and orders
    "use strict";

    ListOrders();
    ListOrderItems();
    ListCarts();
    ListCartItems();

  })();


  function CreateOrder(cartId) {

    // get cart details
    // copy cart details to new order
    // save new order

    let cart = new Cart();
    dataFactory.getCartById(cartId)
      .then( function(response) {
        $scope.cart = Common.createObjects(response.data, cart);
      },
        function (error) {
          $scope.status = 'Unable to load Cart data ' + error.message;
      });


  }

  function ConfirmOrder() {

  }
  function CancelOrder() {

  }
  function GoBackShopping() {

  }
  function CreateCart() {

  }
  function AddCartItem() {

  }
  function ReviewCart() {


  }
  function ListOrders() {

    let order = new Order();
    DataFactory.getOrders()
      .then( function(response) {
          $scope.orders = Common.createObjects(response.data, order);
        },
        function (error) {
          $scope.status = 'Unable to load Order data ' + error.message;
        });
  }
  function ListOrderItems() {

    let orderItem = new OrderItem();
    DataFactory.getOrderItems()
      .then( function(response) {
          $scope.orderItems = Common.createObjects(response.data, orderItem);
        },
        function (error) {
          $scope.status = 'Unable to load OrderItem data ' + error.message;
        });
  }
  function ListCarts() {

    let cart = new Cart();
    DataFactory.getCarts()
      .then( function(response) {
          $scope.carts = Common.createObjects(response.data, cart);
        },
        function (error) {
          $scope.status = 'Unable to load Cart data ' + error.message;
        });
  }
  function ListCartItems() {

    let cartItem = new CartItem();
    DataFactory.getCartItems()
      .then( function(response) {
          $scope.cartItems = Common.createObjects(response.data, cartItem);
        },
        function (error) {
          $scope.status = 'Unable to load CartItem  data ' + error.message;
        });
  }

}]);
