/** ----------------------------------------
    Or
 ---------------------------------------- */

/**
 * The or method will handle the trail based
 * on the initial load of the query method and
 * pass a callback to the trail.
 *
 * @param { function } callback - executable function
 * @returns { Needle } object - new instance
 */

function or(callback) {
    this._addTrail(true, 'or', callback);
    return this._chain(this._data);
}

/** ----------------------------------------
    Or Executable
 ---------------------------------------- */

/**
 * The or method will execute a given query
 * that will handle a exclusive selection
 * of items as based on custom logic.
 *
 * @param { function } callback - executable function
 * @param { array } data - set of data
 * @returns { Needle } object - new instance
 */

function _or(callback, data) {
    return callback(new Needle(data), data);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export {
    or,
    _or
};