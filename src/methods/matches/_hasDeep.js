/** ----------------------------------------
    Utilties
 ---------------------------------------- */

import deep from '@util/_deep';

/** ----------------------------------------
    Has Deep
 ---------------------------------------- */

/**
 * The hasDeep method will look if a given key
 * is present within the object and loop through
 * available nested objects within the given item.
 *
 * @param { string } key - selected key
 * @returns { Needle } object - new instance
 */

function hasDeep(key, value = '') {
    this._hasTrail();
    const array = this._deep('has', key, value);
    return this._chain(array);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default hasDeep;