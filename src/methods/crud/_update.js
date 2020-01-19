/** ----------------------------------------
    Update
 ---------------------------------------- */

/**
 * The update method will basically replace
 * an excising item within the data set.
 *
 * @params { number } index - index of item
 * @params { object } obj - new item
 */

function update(index, obj) {
    this._hasTrail();
    this._data[index] = obj;
    this._chain(this._data);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default update;