/** ----------------------------------------
    Remove All
 ---------------------------------------- */

/**
 * The deleteAll method will clear
 * the current data set.
 */

function removeAll(key) {
    this._hasTrail();
    this._data.forEach(item => delete item[key]);
    this._chain(this._data);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default removeAll;