/** ----------------------------------------
    Utilities
 ---------------------------------------- */

import doubles from '@util/_doubles';
import flatten from '@util/_flatten';
import unique from '@util/_unique';

/** ----------------------------------------
    Query
 ---------------------------------------- */

/**
 * The query method can be used to chain
 * and and or queries or make a custom iteration
 * with a little bit of help from Needle. The
 * function receives a callback and expects an
 * array to be returned. The function will store
 * a pre-filtered data set and set a new data set
 * that is available during the execution of the
 * or() and and() method.
 *
 * @param { function } callback - executable function
 * @returns { Needle } object - new instance
 */


function query(callback) {
    this._hasTrail();
    this._trail['data'] = this._data;
    const result = callback(this, this._data);
    this._trail['prev'] = result;
    return this._chain(unique(result));
}

/** ----------------------------------------
    Query
 ---------------------------------------- */

/**
 * The query method will be responsible for
 * running an array of inclusive or exclusive
 * queries set by the andQuery or orQuery method.
 * This query function will be used behind the
 * scenes and is not documented in the README.
 *
 * @param { array } array - callbacks
 * @param { string } type - flatten option
 * @returns { Needle } object - new instance
 */

function _query(array, type) {
    this._hasTrail();

    const types = { unique, doubles };
    const results = array.map(fn => fn.data);
    const merge = types[type](flatten(results));

    return { amount: array.length, merge };
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export {
    query,
    _query
};