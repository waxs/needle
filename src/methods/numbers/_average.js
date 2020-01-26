/** ----------------------------------------
     Average
 ---------------------------------------- */

/**
 * Will retrieve the average value from a
 * given key and match all items that contain
 * given value. If value isn't present as an
 * actual value it will look for the closest
 * value from the given key.
 *
 * @param { string } key - selected key
 * @returns { Needle } object - new instance
 */

function average(key) {
    this._hasTrail();
    const goal = this._data.reduce((total, item) => total += item[key], 0) / this._data.length;
    const calc = (current, previous) => (Math.abs(current[key] - goal) < Math.abs(previous[key] - goal) ? current : previous);
    const value = this._data.reduce(calc);
    return this.find(key, value[key]);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default average;