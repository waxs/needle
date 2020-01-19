/** ----------------------------------------
    Create
 ---------------------------------------- */

/**
 * The create method will push a new object
 * to the data set. This can be useful if a user
 * is able to interact with a set off data.
 *
 * @param { object } obj - new object
 */

function create(obj) {
    this._hasTrail();
    this._data.push(obj);
    this._chain(this._data);
}

/** ----------------------------------------
 Exports
 ---------------------------------------- */

export default create;