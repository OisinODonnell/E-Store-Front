"use strict";
/**
* Created by oisin on 14/04/2017.
*/

/* Using ECMA6 classes*/

class ItemCategory {

    constructor ( pItemCategoryId, pType)   {
        this._itemCategoryId = pItemCategoryId   ? pItemCategoryId   : "";
        this._type           = pType             ? pType             : "";
        this._stockItems     = [];
    }
    // public getters and setters

    getItemCategoryId()  { return this._itemCategoryId;        }
    setItemCategoryId(x) { this._itemCategoryId   = x ? x : 0; }
    getType          ()  { return this._type;                  }
    setType          (x) { this._type             = x ? x : "";}
    getStockItems    ()  { return this._stockItems;            }
    setStockItems    (x) { this._stockItems       = x ? x : [];}
}


