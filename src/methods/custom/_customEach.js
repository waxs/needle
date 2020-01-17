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
    const custom = data.map(callback);
    return this._chain(custom);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default customEach;