/** ----------------------------------------
    Utilities
 ---------------------------------------- */

import extreme from '@util/_extreme';

/** ----------------------------------------
     Minimum
 ---------------------------------------- */

/**
 * The min method will map the data array
 * and retrieve minimum of a given key.
 *
 * @param { string } key - selected key
 * @returns { Needle } object - new instance
 */

function min(key) {
    this._hasTrail();
    const min = extreme(this._data, key, 'min');
    return this.find(key, min);
}

/** ----------------------------------------
     Exports
 ---------------------------------------- */

export default min;