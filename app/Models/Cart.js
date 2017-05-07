"use strict";
/**
 * Created by oisin on 14/04/2017.
 */

/* Using ECMA6 classes*/

class Cart  {

    constructor (pCartId, pAccountId, pDate, pTotal) {
        this._cartId	= pCartId       ? pCartId       : 0 ;
        this._accountId	= pAccountId    ? pAccountId    : 0 ;
        this._date	    = pDate         ? pDate         : "";
        this._total	    = pTotal        ? pTotal        : 0 ;
        this._cartItems	= [];
        this._account	= {};
    }

    // getters and setters

    getCartId   ()  { return this._cartId;            }
    setCartId   (x) { this._cartId       = x ? x : 0; }
    getAccountId()  { return this._accountId;         }
    setAccountId(x) { this._accountId    = x ? x : 0; }
    getDate     ()  { return this._date;              }
    setDate     (x) { this._date         = x ? x : "";}
    getTotal    ()  { return this._total;             }
    setTotal    (x) { this._total        = x ? x : 0; }
    getCartItems()  { return this._cartItems;         }
    setCartItems(x) { this._cartItems    = x ? x : [];}
    getAccount  ()  { return this._account;           }
    setAccount  (x) { this._account      = x ? x : {};}
}

