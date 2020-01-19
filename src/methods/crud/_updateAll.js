/** ----------------------------------------
    Update All
 ---------------------------------------- */

/**
 * Will update every key within the current
 * data set to a given value.
 *
 * @params { string } key - target key
 * @params { any } value - new value for key
 */

function updateAll(key, value) {
    this._hasTrail();
    this._data.forEach(item => item[key] = value);
    this._chain(this._data);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default updateAll;