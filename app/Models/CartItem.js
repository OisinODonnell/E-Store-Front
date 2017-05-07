"use strict";
/**
 * Created by oisin on 14/04/2017.
 */

/* Using ECMA6 classes*/
class  CartItem {

    constructor (pCartId, pStockItemId, pUnitPrice, pQuantity) {
        this._cartId	   = pCartId       ? pCartId       : 0;
        this._stockItemId  = pStockItemId  ? pStockItemId  : 0;
        this._unitPrice	   = pUnitPrice    ? pUnitPrice    : 0;
        this._quantity	   = pQuantity     ? pQuantity     : 0;
        this._stockItem	   = {} ;
        this._cart	       = {} ;
    }

    // getters and setters
    
    getCartId     ()  { return this._cartId;                }
    setCartId     (x) { this._cartId           = x ? x : 0; }
    getStockItemId()  { return this._stockItemId;           }
    setStockItemId(x) { this._stockItemId      = x ? x : 0; }
    getUnitPrice  ()  { return this._unitPrice;             }
    setUnitPrice  (x) { this._unitPrice        = x ? x : 0; }
    getQuantity   ()  { return this._quantity;              }
    setQuantity   (x) { this._quantity         = x ? x : 0; }
    getCart       ()  { return this._cart;                  }
    setCart       (x) { this._cart             = x ? x : {};}
    getStockItem  ()  { return this._stockItem;             }
    setStockItem  (x) { this._stockItem        = x ? x : {};}
}

