/** ----------------------------------------
    First
 ---------------------------------------- */

/**
 * The first method will return the first
 * item from the data array.
 *
 * @returns { Needle } object - new instance
 */

function first() {
    this._hasTrail();
    const select = this._data[0];
    return this._chain([select]);
}

/** ----------------------------------------
     Exports
 ---------------------------------------- */

export default first;