/** ----------------------------------------
    Custom Filter
 ---------------------------------------- */

/**
 * The custom filter method makes it easy to
 * hook into Needle with a custom function.
 * Has to return true for items kept within
 * the data set.
 *
 * @param { function } callback - executable
 * @param { array } data - array of data, default is constructed
 * @returns { Needle } object - new instance
 */

function customFilter(callback, data = this._data) {
    this._hasTrail();
    const customFilter = data.filter(callback);
    return this._chain(customFilter);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default customFilter;