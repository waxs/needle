/** ----------------------------------------
    Netagtive
 ---------------------------------------- */

/**
 * Return all negative values from an array
 *
 * @param { string } key - selected key
 * @returns { Needle } object - new instance
 */

function negative(key) {
    this._hasTrail();
    const filter = this._operator(key, '<', 0);
    return this._chain(filter);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default negative;