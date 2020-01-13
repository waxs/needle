/** ----------------------------------------
     Needle Core
 ---------------------------------------- */

import Core from '@js/Core';

/** ----------------------------------------
     Utilities
 ---------------------------------------- */

import { construct } from '@js/setup/_construct';

/** ----------------------------------------
     Store
 ---------------------------------------- */

let model = [];
const store = [];

/** ----------------------------------------
     Needle
 ---------------------------------------- */

class Needle extends Core {

    constructor(data = [], trail = null) {
        super();
        construct(this, data, trail);
    }

    /** ----------------------------------------
         Data
     ---------------------------------------- */

    get data() {
        return this._data;
    }

    set data(array) {
        this._data = array;
    }

    /** ----------------------------------------
         Information
     ---------------------------------------- */

    get info() {
        return this._info;
    }

    set info(length) {
        this._info['length'] = length;
    }

    /** ----------------------------------------
         Configuration
     ---------------------------------------- */

    set config(config) {
        this._settings = config;
    }

    get config() {
        return this._settings;
    }

    /** ----------------------------------------
         Store
     ---------------------------------------- */

    get store() {
        return store;
    }

}

export default Needle;