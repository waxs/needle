/** ----------------------------------------
    Results
 ---------------------------------------- */

/**
 * This method will return information about
 * the amount of items and the query given.
 *
 * @param { function } callback - executable
 * @returns { object } - containing info about the query
 */

function _results(callback) {
    callback(this.info);
    return { empty: fn => this._empty(fn) };
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default _results;