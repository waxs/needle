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
    const results = array.map(fn => fn.take());
    const merge = types[type](flatten(results));

    return {
        amount: array.length,
        merge
    };
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default _query;