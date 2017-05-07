"use strict";
/**
 * Created by oisin on 14/04/2017.
 */

/* Using ECMA6 classes*/

class Order {

    constructor (pOrderId, pAccountId, pDate, pTotal) {
        this._orderId	 = pOrderId      ? pOrderId      : 0 ;
        this._accountId	 = pAccountId    ? pAccountId    : 0 ;
        this._date	     = pDate         ? pDate         : "";
        this._total	     = pTotal        ? pTotal        : 0 ;
        this._orderItems = [] ;
        this._account	 = {} ;
    }

    // getters and setters

    getOrderId   ()  { return this._orderId;            }
    setOrderId   (x) { this._orderId      = x ? x : 0;  }
    getAccountId ()  { return this._accountId;          }
    setAccountId (x) { this._accountId    = x ? x : 0;  }
    getDate      ()  { return this._date;               }
    setDate      (x) { this._date         = x ? x : ""; }
    getTotal     ()  { return this._total;              }
    setTotal     (x) { this._total        = x ? x : 0;  }
    getOrderItems()  { return this._orderItems;         }
    setOrderItems(x) { this._orderItems   = x ? x : []; }
    getAccount   ()  { return this._account;            }
    setAccount   (x) { this._account      = x ? x : {}; }
}
    


