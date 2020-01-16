/** ----------------------------------------
    Utilities
 ---------------------------------------- */

import arrange from '@util/_arrange';

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

export default sortDate;