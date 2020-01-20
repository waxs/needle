/** ----------------------------------------
     Needle Core
 ---------------------------------------- */

import Core from '@js/Core';

/** ----------------------------------------
     Utilities
 ---------------------------------------- */

import { construct } from '@js/setup/_construct';
import { contents } from '@js/setup/_contents';

/** ----------------------------------------
     Model
 ---------------------------------------- */

let model = [];

/** ----------------------------------------
     Needle
 ---------------------------------------- */

class Needle extends Core {

    constructor(data = [], trail = null) {
        super();
        construct(this, data, trail);
        contents(this, data);
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
        Content
     ---------------------------------------- */

    get content() {
        return this._content;
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

}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default Needle;