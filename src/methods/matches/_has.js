/** ----------------------------------------
    Has
 ---------------------------------------- */

/**
 * The has method will look if a given key
 * is present within the object, will only
 * look for the first layer of keys.
 *
 * @param { string } key - selected key
 * @returns { Needle } object - new instance
 */

function has(key) {
    this._hasTrail();
    const filter = this._data.filter(item => item.hasOwnProperty(key));
    return this._chain(filter);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default has;