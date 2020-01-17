/** ----------------------------------------
     Sum
 ---------------------------------------- */

/**
 * The sum method will retrieve the sum of
 * a given key, meaning sum every value of
 * the given key present within the data array.
 *
 * @param { string } key - selected key
 * @returns { number } amount of sum of given key
 */

function sum(key) {
    this._hasTrail();
    this._calc = this._data.reduce((total, item) => total + item[key], 0);
    return this._calc;
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default sum;