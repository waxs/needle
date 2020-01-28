/** ----------------------------------------
    Not
 ---------------------------------------- */

/**
 * Check for a false boolean value of a specific
 * key as passed as an argument. Will only
 * look for first layer of keys.
 *
 * @param { string } key - selected key
 * @returns { Needle } object - new instance
 */

function not(key) {
    this._hasTrail();
    const filter = this._data.filter(item => !item[key]);
    return this._chain(filter);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default not;