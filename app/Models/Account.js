"use strict";
/**
 * Created by oisin on 14/04/2017.
 */

/* Using ECMA6 classes*/

class Account {

    constructor (pAccountId, pDateJoined, pName, pEmail, pPhone, pAccountType, pPaymentType, pLoyaltyCard,
        pPassword, pAddressStreet, pAddressCity, pAddressCountry)
    {
        this._accountId	         = pAccountId        ? pAccountId        : 0 ;
        this._dateJoined	       = pDateJoined       ? pDateJoined       : "";
        this._name	             = pName             ? pName             : "";
        this._email	             = pEmail            ? pEmail            : "";
        this._phone	             = pPhone            ? pPhone            : "";
        this._accountType	       = pAccountType      ? pAccountType      : "CUSTOMER";
        this._paymentType	       = pPaymentType      ? pPaymentType      : "VISA"    ;
        this._loyaltyCard	       = pLoyaltyCard      ? pLoyaltyCard      : 0 ;
        this._password	         = pPassword         ? pPassword         : "";
        this._addressStreet	     = pAddressStreet    ? pAddressStreet    : "";
        this._addressCity	       = pAddressCity      ? pAddressCity      : "";
        this._addressCountry	   = pAddressCountry   ? pAddressCountry   : "";
        this._carts	             = [];
        this._sessions	         = [];
        this._orders	           = [];        this._stockReviews	    = [];
    }

    // the getters and setters

    getAccountId     ()  { return this._accountId;             }
    setAccountId     (x) { this._accountId        = x ? x : 0; }
    getDateJoined    ()  { return this._dateJoined;            }
    setDateJoined    (x) { this._dateJoined       = x ? x : "";}
    getName          ()  { return this._name;                  }
    setName          (x) { this._name             = x ? x : "";}
    getEmail         ()  { return this._email;                 }
    setEmail         (x) { this._email            = x ? x : "";}
    getPhone         ()  { return this._phone;                 }
    setPhone         (x) { this._phone            = x ? x : "";}
    getAccountType   ()  { return this._accountType;           }
    setAccountType   (x) { this._accountType      = x ? x : "CUSTOMER";}
    getPaymentType   ()  { return this._paymentType;           }
    setPaymentType   (x) { this._paymentType      = x ? x : "VISA";    }
    getLoyaltyCard   ()  { return this._loyaltyCard;           }
    setLoyaltyCard   (x) { this._loyaltyCard      = x ? x : 0; }
    getPassword      ()  { return this._password;              }
    setPassword      (x) { this._password         = x ? x : "";}
    getAddressStreet ()  { return this._addressStreet;         }
    setAddressStreet (x) { this._addressStreet    = x ? x : "";}
    getAddressCity   ()  { return this._addressCity;           }
    setAddressCity   (x) { this._addressCity      = x ? x : "";}
    getAddressCountry()  { return this._addressCountry;        }
    setAddressCountry(x) { this._addressCountry   = x ? x : "";}
    getCarts         ()  { return this._carts;                 }
    setCarts         (x) { this._carts            = x ? x : [];}
    getSessions      ()  { return this._sessions;              }
    setSessions      (x) { this._sessions         = x ? x : [];}
    getOrders        ()  { return this._orders;                }
    setOrders        (x) { this._orders           = x ? x : [];}
    getStockReviews  ()  { return this._stockReviews;          }
    setStockReviews  (x) { this._stockReviews     = x ? x : [];}
}
