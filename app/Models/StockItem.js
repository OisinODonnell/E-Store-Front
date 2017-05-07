"use strict";
/**
 * Created by oisin on 14/04/2017.
 */

/* Using ECMA6 classes*/

class StockItem  {

    constructor (pStockItemId, pTitle, pStockLevel, pImage, pPrice, pManufacturerId, pItemCategoryId) {

        this._stockItemId	 = pStockItemId      ? pStockItemId      : 0 ;
        this._title			 = pTitle            ? pTitle            : "";
        this._stockLevel	 = pStockLevel       ? pStockLevel       : 0 ;
        this._image			 = pImage            ? pImage            : "";
        this._price			 = pPrice            ? pPrice            : 0 ;
        this._manufacturerId = pManufacturerId   ? pManufacturerId   : 0 ;
        this._itemCategoryId = pItemCategoryId   ? pItemCategoryId   : 0 ;
        this._cartItems 	 = [];
        this._orderItems 	 = [];
        this._manufacturer 	 = "";
        this._itemCategory 	 = "";
        this._stockReviews 	 = [];
    }
    
    // getters and setters
    getStockItemId   ()  { return this._stockItemId;             }
    setStockItemId   (x) { this._stockItemId      = (x) ? x : 0; }
    getTitle         ()  { return this._title;                   }
    setTitle         (x) { this._title            = (x) ? x : "";}
    getStockLevel    ()  { return this._stockLevel;              }
    setStockLevel    (x) { this._stockLevel       = (x) ? x : 0; }
    getImage         ()  { return this._image;                   }
    setImage         (x) { this._image            = (x) ? x : "";}
    getPrice         ()  { return this._price;                   }
    setPrice         (x) { this._price            = (x) ? x : 0; }
    getManufacturerId()  { return this._manufacturerId;          }
    setManufacturerId(x) { this._manufacturerId   = (x) ? x : 0; }
    getItemCategoryId()  { return this._itemCategoryId;          }
    setItemCategoryId(x) { this._itemCategoryId   = (x) ? x : 0; }
    getStockReviews  ()  { return this._stockReviews;            }
    setStockReviews  (x) { this._stockReviews     = (x) ? x : [];}
    getCartItems     ()  { return this._cartItems;               }
    setCartItems     (x) { this._cartItems        = (x) ? x : [];}
    getOrderItems    ()  { return this._orderItems;              }
    setOrderItems    (x) { this._orderItems       = (x) ? x : [];}
    getManufacturer  ()  { return this._manufacturer;            }
    setManufacturer  (x) { this._manufacturer     = (x) ? x : "";}
    getItemCategory  ()  { return this._itemCategory;            }
    setItemCategory  (x) { this._itemCategory     = (x) ? x : "";}
}
