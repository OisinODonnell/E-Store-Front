"use strict";
/**
 * Created by oisin on 14/04/2017.
 */

/* Using ECMA6 classes*/

class Session  {

    constructor (pSessionId, pAccountId, pDateStart, pDateEnd) {
        this._sessionId	=  pSessionId   ? pSessionId    : 0  ;
        this._accountId	=  pAccountId   ? pAccountId    : 0  ;
        this._dateStart	=  pDateStart   ? pDateStart    : "" ;
        this._dateEnd	=  pDateEnd     ? pDateEnd      : "" ;
        this._account 	=  {} ;
    }

    // getters and setters

    getSessionId()  { return this._sessionId;         }
    setSessionId(x) { this._sessionId    = x ? x : 0; }
    getAccountId()  { return this._accountId;         }
    setAccountId(x) { this._accountId    = x ? x : 0; }
    getDateStart()  { return this._dateStart;         }
    setDateStart(x) { this._dateStart    = x ? x : "";}
    getDateEnd  ()  { return this._dateEnd;           }
    setDateEnd  (x) { this._dateEnd      = x ? x : "";}
    getAccount  ()  { return this._account;           }
    setAccount  (x) { this._account      = x ? x : {};}
}

