/** ----------------------------------------
    Utilities
 ---------------------------------------- */

import * as util from './../util/util';

/** ----------------------------------------
    Template
 ---------------------------------------- */

/**
 * With the template method a callback will be
 * executed for every item present within the
 * data array. The data of each item will be
 * passed into the callback. The template method
 * will also return a object containing information
 * about the results.
 *
 * @param { function } callback - executable
 * @returns { object } - containing info about the query
 */

function template(callback, data = this._data) {
    if(this._hasTrail()) return this._data.forEach(callback, this);
    data.forEach(callback, { needle: this, info: this.info });
    return this.info;
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default {
    template
};