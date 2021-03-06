﻿let myApp =  angular.module('app', ['ngRoute', 'ngCookies','ngFlash'])
    .config(config)
    .run(run);

  config.$inject = ['$routeProvider','FlashProvider'];
    function config($routeProvider,FlashProvider) {

      //
      FlashProvider.setTimeout(2000);
      FlashProvider.setShowClose(true);


      // these next two were recommended to facilitate CORS communications
      // But breaks routes when included
      // $httpProvider.defaults.useXDomain                                      = true;
      // $httpProvider.defaults.headers.common[ 'Access-Control-Allow-Origin' ] = '*';

      $routeProvider
        .when('/', {
          controller: 'LoginController',
          templateUrl: 'js/login/login.view.html',
          controllerAs: 'vm',
          requireLogin: true
        })
        .when('/login', {
          controller: 'LoginController',
          templateUrl: 'js/login/login.view.html',
          controllerAs: 'vm',
          requireLogin: false
        })
        .when('/logout', {
          controller: 'HomeController',
          templateUrl: 'js/login/home.view.html',
          controllerAs: 'vm',
          redirectTo: '/login',
          requireLogin: true
        })
        .when('/home', {
          controller: 'HomeController',
          templateUrl: 'js/login/home.view.html',
          controllerAs: 'vm',
          requireLogin: true
        })

        .when('/register', {
          controller: 'LoginController',
          templateUrl: 'js/login/register.view.html',
          controllerAs: 'vm',
          requireLogin: false
        })
        // Accounts
        .when('/Accounts/List', {
          controller: 'AccountsController',
          templateUrl: 'js/Accounts/List-Accounts.view.html',
          // requireLogin: true,
          // permissions: [ "administration" ],
          controllerAs: 'ac'
        })
        .when('/Accounts/AccountById', {
          controller: 'AccountsController',
          templateUrl: 'js/Accounts/Find-Account.view.html',
          requireLogin: true,
          permissions: [ "administration" ],
          controllerAs: 'vm'

        })
        .when('/Accounts/AccountAdd', {
          controller: 'AccountsController',
          templateUrl: 'js/Accounts/Add-Account.view.html',
          requireLogin: true,
          permissions: [ "administration" ],
          controllerAs: 'vm'
        })
        .when('/Accounts/AccountDeleteById', {
          controller: 'AccountsController',
          templateUrl: 'js/Accounts/Delete-Account.view.html',
          requireLogin: true,
          permissions: [ "administration" ],
          controllerAs: 'vm'
        })
        .when('/Accounts/AccountEdit', {
          controller: 'AccountsController',
          templateUrl: 'js/Accounts/Change-Account.view.html',
          requireLogin: true,
          permissions: [ "administration" ],
          controllerAs: 'vm'
        })
        // Carts
        .when('/OrdersAndCarts/Checkout', {
          controller: 'OrdersAndCartsController',
          templateUrl: 'js/OrdersAndCarts/Checkout.view.html',
          requireLogin: true,
          controllerAs: 'vm'
        })

        .when('/OrdersAndCarts/Carts/List', {
          controller: 'OrdersAndCartsController',
          templateUrl: 'js/OrdersAndCarts/List-Carts.view.html',
          requireLogin: true,
          controllerAs: 'vm'
        })
        .when('/OrdersAndCarts/CartById', {
          controller: 'OrdersAndCartsController',
          templateUrl: 'js/OrdersAndCarts/Find-Cart.view.html',
          requireLogin: true,
          controllerAs: 'vm'
        })
        .when('/OrdersAndCarts/CartAdd', {
          controller: 'OrdersAndCartsController',
          templateUrl: 'js/OrdersAndCarts/Add-Cart.view.html',
          requireLogin: true,
          controllerAs: 'vm'
        })
        .when('/OrdersAndCarts/CartDeleteById', {
          controller: 'OrdersAndCartsController',
          templateUrl: 'js/OrdersAndCarts/Delete-Cart.view.html',
          requireLogin: true,
          controllerAs: 'vm'
        })
        // CartItems
        .when('/OrdersAndCarts/CartItems/List', {
          controller: 'OrdersAndCartsController',
          templateUrl: 'js/OrdersAndCarts/List-CartItems.view.html',
          requireLogin: true,
          controllerAs: 'vm'
        })
        .when('/OrdersAndCarts/CartItemById', {
          controller: 'OrdersAndCartsController',
          templateUrl: 'js/OrdersAndCarts/Find-CartItem.view.html',
          requireLogin: true,
          controllerAs: 'vm'
        })
        .when('/OrdersAndCarts/CartItemAdd', {
          controller: 'OrdersAndCartsController',
          templateUrl: 'js/OrdersAndCarts/Add-CartItem.view.html',
          requireLogin: true,
          controllerAs: 'vm'
        })
        .when('/OrdersAndCarts/CartItemDeleteById', {
          controller: 'OrdersAndCartsController',
          templateUrl: 'js/OrdersAndCarts/Delete-CartItem.view.html',
          requireLogin: true,
          controllerAs: 'vm'
        })

        // Orders
        .when('/OrdersAndCarts/Orders/List', {
          controller: 'OrdersAndCartsController',
          templateUrl: 'js/OrdersAndCarts/List-Orders.view.html',
          requireLogin: true,
          controllerAs: 'vm'
        })
        .when('/OrdersAndCarts/OrderById', {
          controller: 'OrdersAndCartsController',
          templateUrl: 'js/OrdersAndCarts/Find-Order.view.html',
          requireLogin: true,
          controllerAs: 'vm'
        })
        .when('/OrdersAndCarts/OrderAdd', {
          controller: 'OrdersAndCartsController',
          templateUrl: 'js/OrdersAndCarts/Add-Order.view.html',
          requireLogin: true,
          controllerAs: 'vm'
        })
        .when('/OrderDeleteById', {
          controller: 'OrdersAndCartsController',
          templateUrl: 'js/OrdersAndCarts/Delete-Order.view.html',
          requireLogin: true,
          controllerAs: 'vm'
        })
        // OrderItems
        .when('/OrdersAndCarts/OrderItems/List', {
          controller: 'OrdersAndCartsController',
          templateUrl: 'js/OrdersAndCarts/List-OrderItems.view.html',
          requireLogin: true,
          controllerAs: 'vm'
        })
        .when('/OrdersAndCarts/OrderItemById', {
          controller: 'OrdersAndCartsController',
          templateUrl: 'js/OrdersAndCarts/Find-OrderItem.view.html',
          requireLogin: true,
          controllerAs: 'vm'
        })
        .when('/OrdersAndCarts/OrderItemAdd', {
          controller: 'OrdersAndCartsController',
          templateUrl: 'js/OrdersAndCarts/Add-OrderItem.view.html',
          requireLogin: true,
          controllerAs: 'vm'
        })
        .when('/OrdersAndCarts/OrderItemDeleteById', {
          controller: 'OrdersAndCartsController',
          templateUrl: 'js/OrdersAndCarts/Delete-OrderItem.view.html',
          requireLogin: true,
          controllerAs: 'vm'
        })
        // Sessions
        .when('/Accounts/Sessions/List', {
          controller: 'AccountsController',
          templateUrl: 'js/Accounts/List-Sessions.view.html',
          permissions: [ "administration" ],
          requireLogin: true,
          controllerAs: 'vm'
        })
        .when('/Accounts/SessionById', {
          controller: 'AccountsController',
          templateUrl: 'js/Accounts/Find-Session.view.html',
          requireLogin: true,
          permissions: [ "administration" ],
          controllerAs: 'vm'
        })
        .when('/Accounts/SessionAdd', {
          controller: 'AccountsController',
          templateUrl: 'js/Accounts/Add-Session.view.html',
          requireLogin: true,
          controllerAs: 'vm'
        })
        .when('/Accounts/SessionDeleteById', {
          controller: 'AccountsController',
          templateUrl: 'js/Accounts/Delete-Session.view.html',
          requireLogin: true,
          controllerAs: 'vm'
        })
        // ItemCategories
        .when('/Stock/ItemCategories/List', {
          controller: 'StockController',
          templateUrl: 'js/Stock/List-ItemCategories.view.html',
          requireLogin: true,
          controllerAs: 'vm'
        })
        .when('/Stock/ItemCategoriesAdd', {
          controller: 'StockController',
          templateUrl: 'js/Stock/Add-ItemCategory.view.html',
          requireLogin: true,
          permissions: [ "administration" ],
          controllerAs: 'vm'
        })
        .when('/Stock/ItemCategoriesDeleteById', {
          controller: 'StockController',
          templateUrl: 'js/Stock/Delete-ItemCategory.view.html',
          requireLogin: true,
          permissions: [ "administration" ],
          controllerAs: 'vm'
        })
          .when('/Stock/ItemCategoriesById', {
            controller: 'StockController',
            templateUrl: 'js/Stock/Find-ItemCategory.view.html',
            requireLogin: true,
            controllerAs: 'vm'
          })

        .when('/Stock/SearchAdmin', {
          controller: 'StockController',
          templateUrl: 'js/Stock/productSearch.Administrator.view.html',
          requireLogin: true,
          permissions: [ "administration" ],
          controllerAs: 'vm'
        })
        .when('/Stock/SearchCustomer', {
          controller: 'StockController',
          templateUrl: 'js/Stock/productSearch.Customer.view.html',
          requireLogin: true,
          permissions: [ "" ],
          controllerAs: 'vm'
        })
        // StockItems


        //Manufacturers
        .when('/Stock/Manufacturers/List', {
          controller: 'StockController',
          templateUrl: 'js/Stock/List-Manufacturers.view.html',
          requireLogin: true,
          controllerAs: 'vm'
        })
        .when('/Stock/ManufacturerById', {
          controller: 'StockController',
          templateUrl: 'js/Stock/Find-Manufacturer.view.html',
          requireLogin: true,
          controllerAs: 'vm'
        })
        .when('/Stock/ManufacturerAdd', {
          controller: 'StockController',
          templateUrl: 'js/Stock/Add-Manufacturer.view.html',
          requireLogin: true,
          permissions: [ "administration" ],
          controllerAs: 'vm'
        })
        .when('/Stock/ManufacturerDeleteById', {
          controller: 'StockController',
          templateUrl: 'js/Stock/Delete-Manufacturer.view.html',
          requireLogin: true,
          permissions: [ "administration" ],
          controllerAs: 'vm'
        })
        .when('/Stock/StockItems/List', {
          controller: 'StockController',
          templateUrl: 'js/Stock/List-StockItems.view.html',
          requireLogin: true,
          controllerAs: 'vm'

        })

        .when('/Stock/List', {
          controller: 'StockController',
          templateUrl: 'js/Stock/List-Stock.view.html',
          requireLogin: true,
          permissions: [ "administration" ],
          controllerAs: 'vm'

        })
        .when('/Stock/StockReviews/List', {
          controller: 'StockController',
          templateUrl: 'js/Stock/List-StockReviews.view.html',
          requireLogin: true,
          controllerAs: 'vm'

        })
        .when('/Stock/StockItemById', {
          controller: 'StockController',
          templateUrl: 'js/Stock/Find-StockItem.view.html',
          requireLogin: true,
          controllerAs: 'vm'

        })
        .when('/Stock/StockItemAdd', {
          controller: 'StockController',
          templateUrl: 'js/Stock/Stock/Add-StockItem.view.html',
          requireLogin: true,
          permissions: [ "administration" ],
          controllerAs: 'vm'

        })
        .when('/Stock/StockItemDeleteById', {
          controller: 'StockController',
          templateUrl: 'js/Stock/Delete-StockItem.view.html',
          requireLogin: true,
          permissions: [ "administration" ],
          controllerAs: 'vm'

        })
        // StockReviews

        .when('/Stock/StockReviewById', {
          controller: 'StockController',
          templateUrl: 'js/Stock/Find-StockReview.view.html',
          requireLogin: true,
          controllerAs: 'vm'

        })
        .when('/Stock/StockReviewAdd', {
          controller: 'StockController',
          templateUrl: 'js/Stock/Add-StockReview.view.html',
          requireLogin: true,
          controllerAs: 'vm'

        })
        .when('/Stock/StockReviewDeleteById', {
          controller: 'StockController',
          templateUrl: 'js/Stock/Delete-StockReview.view.html',
          requireLogin: true,
          permissions: [ "administration" ],
          controllerAs: 'vm'
        })

        .otherwise({ redirectTo: '/login' });
  }

  run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
  function run($rootScope, $location, $cookies, $http) {
    // keep user logged in after page refresh
    // $rootScope.globals.currentUser = "";
    $rootScope.globals = $cookies.getObject('globals') || {};
    if ($rootScope.globals.currentUser) {
      $http.defaults.headers.common[ 'Authorization' ] = 'Basic ' + $rootScope.globals.currentUser.authdata;
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
      // redirect to login page if not logged in and trying to access a restricted page
      let restrictedPage = $.inArray($location.path(), [ '/login', '/register' ]) === -1;
      let loggedIn       = $rootScope.globals.currentUser;
      if (restrictedPage && !loggedIn) {
        $location.path('/login');
      }
    });
  }




