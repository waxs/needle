/** ----------------------------------------
    Utilties
 ---------------------------------------- */

import deep from '@util/_deep';

/** ----------------------------------------
    Find Deep
 ---------------------------------------- */

/**
 * The findDeep method will return a specific
 * key value pair within the object, the
 * findDeep method will also look for any
 * nested object inside the item.
 *
 * @param { string } key - selected key
 * @param { string | bool | array | number } value - matching value
 * @returns { Needle } object - new instance
 */

function findDeep(key, value) {
    this._hasTrail();
    const array = this._deep('find', key, value);
    return this._chain(array);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default findDeep;