/** ----------------------------------------
    Equal
 ---------------------------------------- */

/**
 * The equal method will look for a matching
 * item within the data array. This method
 * uses the operator helper method.
 *
 * @param { string } key - selected key
 * @param { number } value - matching value
 * @returns { Needle } object - new instance
 */

function equal(key, value) {
    this._hasTrail();
    const filter = this._operator(key, '=', value);
    return this._chain(filter);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default equal;