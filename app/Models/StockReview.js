"use strict";
/**
 * Created by oisin on 14/04/2017.
 */

/* Using ECMA6 classes*/

class StockReview {
    
    constructor (pStockItemId, pAccountId, pRating, pComment, pDate) {

        this._stockItemId = pStockItemId   ? pStockItemId  : 0 ;
        this._accountId   = pAccountId     ? pAccountId    : 0 ;
        this._rating      = pRating        ? pRating       : 5 ;
        this._comment     = pComment       ? pComment      : "";
        this._date        = pDate          ? pDate         : "";
        this._stockItem   = {};
        this._account     = {};
    }
    
    // getters and setters

    getStockItemId()  { return this._stockItemId;           }
    setStockItemId(x) { this._stockItemId      = x ? x : 0; }
    getAccountId  ()  { return this._accountId;             }
    setAccountId  (x) { this._accountId        = x ? x : 0; }
    getRating     ()  { return this._rating;                }
    setRating     (x) { this._rating           = x ? x : 5; }
    getComment    ()  { return this._comment;               }
    setComment    (x) { this._comment          = x ? x : "";}
    getDate       ()  { return this._date;                  }
    setDate       (x) { this._date             = x ? x : "";}
    getStockItem  ()  { return this._stockItem;             }
    setStockItem  (x) { this._stockItem        = x ? x : {};}
    getAccount    ()  { return this._account;               }
    setAccount    (x) { this._account          = x ? x : {};}
}


