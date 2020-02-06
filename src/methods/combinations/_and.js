/** ----------------------------------------
    And
 ---------------------------------------- */

/**
 * The and method will handle the trail based
 * on the initial load of the query method and
 * pass a callback to the trail.
 *
 * @param { function } callback - executable function
 * @returns { Needle } object - new instance
 */

function and(callback) {
    this._addTrail(true, 'and', callback);
    return this._chain(this._data);
}

/** ----------------------------------------
    And Executable
 ---------------------------------------- */

/**
 * The and method will execute a given query
 * that will handle a inclusive selection
 * of items as based on custom logic.
 *
 * @param { function } callback - executable function
 * @param { array } data - set of data
 * @returns { Needle } object - new instance
 */

function _and(callback, data) {
    return callback(new Needle(data), data);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export {
    and,
    _and
};