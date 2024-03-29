/** ----------------------------------------
     Custom Each
 ---------------------------------------- */

/**
 * The custom each method makes it easy to
 * hook into Needle with a custom function.
 *
 * @param { function } callback - executable
 * @param { array } data - array of data, default is constructed
 * @returns { Needle } object - new instance
 */

function customEach(callback, data = this._data) {
    this._hasTrail();
    const customMap = data.map(callback);
    return this._chain(customMap);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default customEach;