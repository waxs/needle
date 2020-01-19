/** ----------------------------------------
    Remove Value
 ---------------------------------------- */

/**
 * With the deleteValue method a single
 * key can be removed from a given item
 * within the current data set.
 *
 * @params { number } index - index of item
 * @params { string } key - key to be removed from item
 */

function removeValue(index, key) {
    this._hasTrail();
    delete this._data[index][key];
    this._chain(this._data);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default removeValue;