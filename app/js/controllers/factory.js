myApp.factory('dataFactory', ['$http',  function ($http) {

    let factory = {};
    let urlBase = 'http://localhost:8080';

    // Account
    factory.getAccounts           = ()              => $http.get( urlBase + '/Accounts' );
    factory.getAccountById        = (id )           => $http.get( urlBase + '/Account/' + id );
    factory.addAccount            = (account)       => $http.get( urlBase + '/Account/create', account);
    factory.deleteAccountById     = (id )           => $http.get( urlBase + '/Account/delete/' + id );

    // Session
    factory.getSessions           = ()              => $http.get( urlBase + '/Sessions');
    factory.getSessionById        = (id )           => $http.get( urlBase + '/Session/' + id );
    factory.addSession            = (session)       => $http.get( urlBase + '/Session/create', session);
    factory.deleteSessionById     = (id )           => $http.get( urlBase + '/Session/delete/' + id );

    // StockItem
    factory.getStockItems         = ()              => $http.get( urlBase + '/StockItems');
    factory.getStockItemById      = (id )           => $http.get( urlBase + '/StockItem/' + id );
    factory.addStockItem          = (stockItem)     => $http.get( urlBase + '/StockItem/create', stockItem);
    factory.deleteStockItemById   = (id )           => $http.get( urlBase + '/StockItem/delete/' + id );

    // Manufacturer
    factory.getManufacturers      = ()              => $http.get( urlBase + '/Manufacturers');
    factory.getManufacturerById   = (id )           => $http.get( urlBase + '/Manufacturer/' + id );
    factory.addManufacturer       = (manufacturer)  => $http.get( urlBase + '/Manufacturer/create', manufacturer);
    factory.deleteManufacturerById= (id )           => $http.get( urlBase + '/Manufacturer/delete/' + id );

    // ItemCategory
    factory.getItemCategories     = ()              => $http.get( urlBase + '/ItemCategories');
    factory.getItemCategoryById   = (id )           => $http.get( urlBase + '/ItemCategory/' + id );
    factory.addItemCategory       = (itemCategory)  => $http.get( urlBase + '/ItemCategory/create', itemCategory);
    factory.deleteItemCategoryById= (id )           => $http.get( urlBase + '/ItemCategory/delete/' + id );

    // Cart
    factory.getCarts              = ()              => $http.get( urlBase + '/Carts');
    factory.getCartById           = (id )           => $http.get( urlBase + '/Cart/' + id );
    factory.addCart               = (cart)          => $http.get( urlBase + '/Cart/create', cart);
    factory.deleteCartById        = (id )           => $http.get( urlBase + '/Cart/delete/' + id );

    // CartItem
    factory.getCartItems          = ()              => $http.get( urlBase + '/CartItems');
    factory.getCartItemById       = (id )           => $http.get( urlBase + '/CartItem/' + id );
    factory.addCartItem           = (cartItem)      => $http.get( urlBase + '/CartItem/create', cartItem);
    factory.deleteCartItemById    = (id )           => $http.get( urlBase + '/CartItem/delete/' + id );

    // Order
    factory.getOrders             = ()              => $http.get( urlBase + '/Orders');
    factory.getOrderById          = (id )           => $http.get( urlBase + '/Order/' + id );
    factory.addOrder              = (order)         => $http.get( urlBase + '/Order/create', order);
    factory.deleteOrderById       = (id )           => $http.get( urlBase + '/Order/delete/' + id );

    // OrderItem
    factory.getOrderItems         = ()              => $http.get( urlBase + '/OrderItems');
    factory.getOrderItemById      = (id )           => $http.get( urlBase + '/OrderItem/' + id );
    factory.addOrderItem          = (orderItem)     => $http.get( urlBase + '/OrderItem/create', orderItem);
    factory.deleteOrderItemById   = (id )           => $http.get( urlBase + '/OrderItem/delete/' + id );

    // StockReview
    factory.getStockReviews       = ()              => $http.get( urlBase + '/StockReviews');
    factory.getStockReviewById    = (id )           => $http.get( urlBase + '/StockReview/' + id );
    factory.addStockReview        = (stockReview)   => $http.get( urlBase + '/StockReview/create', stockReview);
    factory.deleteStockReviewById = (id )           => $http.get( urlBase + '/StockReview/delete/' + id );

    return factory;
}]);
