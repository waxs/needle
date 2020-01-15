/** ----------------------------------------
    Get
 ---------------------------------------- */

/**
 * With the get method the entire class will
 * be returned, making it possible to iterate
 * with any custom script.
 *
 * @returns { Needle } object - new instance
 */

function get() {
    this._hasTrail();
    return this._chain(this._data);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default get;