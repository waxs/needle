/** ----------------------------------------
    Index
 ---------------------------------------- */

/**
 * The index method can retrieve a given
 * index from the data array.
 *
 * @param { number } id - selected index
 * @returns { object } - will return selected item from data
 */

function index(id) {
    this._hasTrail();
    return this._data[id];
}

/** ----------------------------------------
     Exports
 ---------------------------------------- */

export default index;