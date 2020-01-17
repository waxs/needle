/** ----------------------------------------
    Is
 ---------------------------------------- */

/**
 * Check for a boolean value of a specific
 * key as passed as an argument. Will only
 * look for first layer of keys.
 *
 * @param { string } key - selected key
 * @returns { Needle } object - new instance
 */

function is(key) {
    this._hasTrail();
    const filter = this._data.filter(item => item[key]);
    return this._chain(filter);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default is;