/** ----------------------------------------
    Remove
 ---------------------------------------- */

/**
 * Delete a single item from the current
 * data set. Will take the index number
 * of the item to be removed.
 *
 * @params { number } index - index of item
 */

function remove(index) {
    this._hasTrail();
    delete this._data[index];
    this._chain(this._data);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default remove;