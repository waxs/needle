/** ----------------------------------------
    Update Value
 ---------------------------------------- */

/**
 * Will update a single item key within the
 * current data set to a given value.
 *
 * @params { number } index - index of item
 * @params { string } key - target key
 * @params { any } value - new value for key
 */

function updateValue(index, key, value) {
    this._hasTrail();
    this._data[index][key] = value;
    this._chain(this._data);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default updateValue;