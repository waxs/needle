/** ----------------------------------------
     Utilities
 ---------------------------------------- */

import arrange from '@util/_arrange';

/** ----------------------------------------
    Sort
 ---------------------------------------- */

/**
 * The sort method will sort the items within
 * the data array based on asc or desc order.
 * This can be specified as a second argument
 * and will use a default of asc.
 *
 * @param { number } key - selected key
 * @param { string } type - either "asc" or "desc"
 * @returns { Needle } object - new instance
 */

function sort(key, type = 'asc') {
    this._hasTrail();
    const sort = arrange(this._data, key, type);
    return this._chain(sort);
}

/** ----------------------------------------
    Sort Date
 ---------------------------------------- */

/**
 * The sortDate method will sort the items within
 * the data array based on asc or desc order.
 * This sort method should only be used if dates
 * are provided with the selected value of a key.
 *
 * @param { number } key - selected key
 * @param { string } type - either "asc" or "desc"
 * @returns { Needle } object - new instance
 */

function sortDate (key, type = 'asc') {
    this._hasTrail();
    const sort = arrange(this._data, key, type, true);
    return this._chain(sort);
}

/** ----------------------------------------
     Exports
 ---------------------------------------- */

export default {
    sort,
    sortDate
};