/** ----------------------------------------
    Empty
 ---------------------------------------- */

/**
 * If no results can be retrieved the empty
 * method can template a "no results" view.
 * This function will only execute if no
 * results are available.
 *
 * @param { function } callback - executable
 * @returns { object } - containing info about the query
 */

function _empty(callback) {
    if(this._data.length === 0) callback(this.config);
    return { results: fn => this._results(fn) };
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default _empty;