/** ----------------------------------------
    Utilities
 ---------------------------------------- */

import isType from '@util/_isType';

/** ----------------------------------------
    Bigger
 ---------------------------------------- */

/**
 * The bigger method will compare each item
 * to a given value and return the items
 * that match the given criteria.
 *
 * @param { string } key - selected key
 * @param { string | number } value - matching value
 * @param { bool } date - will parse values to date
 * @returns { Needle } object - new instance
 */

function bigger(key, value, date = false) {
    this._hasTrail();
    const isDate = isType(value) === 'date';
    const filter = !value ? this._data : this._operator(key, '>=', value, isDate || date);
    return this._chain(filter);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default bigger;