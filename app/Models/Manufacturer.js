"use strict";
/**
 * Created by oisin on 14/04/2017.
 */

/* Using ECMA6 classes*/

class Manufacturer {

    constructor ( pManufacturerId, pName, pContactName, pContactPhone, pContactEmail ) {
        this._manufacturerId = pManufacturerId   ? pManufacturerId   : 0 ;
        this._name           = pName             ? pName             : "";
        this._contactName    = pContactName      ? pContactName      : "";
        this._contactPhone   = pContactPhone     ? pContactPhone     : "";
        this._contactEmail   = pContactEmail     ? pContactEmail     : "";
        this._stockItems     = [];
    }

    // getters and setters

    getManufacturerId()  { return this._manufacturerId;         }
    setManufacturerId(x) { this._manufacturerId   = x ? x : 0;  }
    getName          ()  { return this._name;                   }
    setName          (x) { this._name             = x ? x : ""; }
    getContactName   ()  { return this._contactName;            }
    setContactName   (x) { this._contactName      = x ? x : ""; }
    getContactPhone  ()  { return this._contactPhone;           }
    setContactPhone  (x) { this._contactPhone     = x ? x : ""; }
    getContactEmail  ()  { return this._contactEmail;           }
    setContactEmail  (x) { this._contactEmail     = x ? x : ""; }
    getStockItems    ()  { return this._stockItems;             }
    setStockItems    (x) { this._stockItems       = x ? x : []; }
}


