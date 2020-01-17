/** ----------------------------------------
     Minimum
 ---------------------------------------- */

/**
 * The min method will map the data array
 * and retrieve minimum of a given key.
 *
 * @param { string } key - selected key
 * @returns { Needle } object - new instance
 */

function min(key) {
    this._hasTrail();
    const min = Math.min(...this._data.map(item => item[key]));
    return this.find(key, min);
}

/** ----------------------------------------
     Exports
 ---------------------------------------- */

export default min;