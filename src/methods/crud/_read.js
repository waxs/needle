/** ----------------------------------------
    Read
 ---------------------------------------- */

/**
 * Retrieve a specific item from the data set.
 *
 * @returns { object } - item from data set
 */

function read(index) {
    this._hasTrail();
    return this._chain([this._data[index]]);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default read;