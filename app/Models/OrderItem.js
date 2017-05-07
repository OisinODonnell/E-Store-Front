"use strict";
/**
 * Created by oisin on 14/04/2017.
 */

/* Using ECMA6 classes*/

class OrderItem   {

    constructor (pOrderId, pStockItemId, pUnitPrice, pQuantity) {
        this._orderId		=  pOrderId         ? pOrderId      : 0;
        this._stockItemId	=  pStockItemId     ? pStockItemId  : 0;
        this._unitPrice	    =  pUnitPrice       ? pUnitPrice    : 0;
        this._quantity	    =  pQuantity        ? pQuantity     : 0;
        this._stockItem 	=  {} ;
        this._order 		=  {} ;
    }

    // getters and setter

    getOrderId    ()  { return this._orderId;           }
    setOrderId    (x) { this._orderId      = x ? x : 0; }
    getStockItemId()  { return this._stockItemId;       }
    setStockItemId(x) { this._stockItemId  = x ? x : 0; }
    getUnitPrice  ()  { return this._unitPrice;         }
    setUnitPrice  (x) { this._unitPrice    = x ? x : 0; }
    getQuantity   ()  { return this._quantity;          }
    setQuantity   (x) { this._quantity     = x ? x : 0; }
    getStockItem  ()  { return this._stockItem;         }
    setStockItem  (x) { this._stockItem    = x ? x : {};}
    getOrder      ()  { return this._order;             }
    setOrder      (x) { this._order        = x ? x : {};}
}