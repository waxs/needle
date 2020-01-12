/** ----------------------------------------
     Utils
 ---------------------------------------- */

import * as util from './util/util';

/** ----------------------------------------
     Needle Core
 ---------------------------------------- */

import Core from './Core';

/** ----------------------------------------
     Store
 ---------------------------------------- */

let model = [];
const store = [];

/** ----------------------------------------
     Needle
 ---------------------------------------- */

class Needle extends Core {

    constructor(data = [], trail) {
        super();
        model = model.length ? model : data;
        this._amount = data.length || 0;
        this._calc = 0;
        this._chunks = [];
        this._data = data;
        this._info = {
            chunks: { ...this._chunks },
            original: model.length,
            length: this._data.length
        };
        this._settings = {};
        this._stamp = {};
        this._trail = trail || { exe: [], data: [], prev: [] };
    }

    /** ----------------------------------------
         Data
     ---------------------------------------- */

    /**
     * Retrieve data from instance with this
     * getter, will return original data.
     */

    get data() {
        return this._data;
    }

    /**
     * Set new data in constructor, using this
     * setter as an alternative for passing
     * array of object to Needle.
     */

    set data(array) {
        this._data = array;
    }

    /** ----------------------------------------
         Information
     ---------------------------------------- */

    /**
     * Retrieve information about the query
     * results and changes. Set the result length
     * if has end of query pipe.
     */

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

    /**
     * Using this get function the store can
     * be retrieved for further manipulation.
     *
     * @returns { array } - store
     */

    get store() {
        return store;
    }

}

export default Needle;