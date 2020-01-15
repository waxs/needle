/** ----------------------------------------
    Last
 ---------------------------------------- */

/**
 * The last method will return the last
 * item from the data array.
 *
 * @returns { Needle } object - new instance
 */

function last() {
    this._hasTrail();
    const select = this._data.slice(-1)[0];
    return this._chain([select]);
}

/** ----------------------------------------
     Exports
 ---------------------------------------- */

export default last;