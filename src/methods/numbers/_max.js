/** ----------------------------------------
    Utilities
 ---------------------------------------- */

import extreme from '@util/_extreme';

/** ----------------------------------------
     Maximum
 ---------------------------------------- */

/**
 * The max method will map the data array
 * and retrieve maximum of a given key.
 *
 * @param { string } key - selected key
 * @returns { Needle } object - new instance
 */

function max(key) {
    this._hasTrail();
    const max = extreme(this._data, key, 'max');
    return this.find(key, max);
}

/** ----------------------------------------
     Exports
 ---------------------------------------- */

export default max;