/** ----------------------------------------
    Find
 ---------------------------------------- */

/**
 * The find method will return a specific
 * key value pair within the object, the
 * find method only look for the first
 * layer of keys present in the item.
 *
 * @param { string } key - selected key
 * @param { string | bool | array | number } value - matching value
 * @returns { Needle } object - new instance
 */

function find(key, value) {
    this._hasTrail();
    const filter = this._find(key, value);
    return this._chain(filter);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default find;