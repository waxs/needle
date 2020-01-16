/** ----------------------------------------
     Random
 ---------------------------------------- */

/**
 * With the random method a random amount
 * of items can be returned from the latest
 * data state. This makes it easy to quickly
 * test multiple sets of data.
 *
 * @param { number } number - amount of items
 * @returns { Needle } object - new instance
 */

function random(number = 1) {
    this._hasTrail();
    let array = [];

    while (array.length !== number || array.length === this._data.length) {
        const random = Math.floor(Math.random() * (1 + this._data.length - 1));
        array.indexOf(this._data[random]) === -1 && array.push(this._data[random]);
    }

    return this._chain(array);
}

/** ----------------------------------------
     Exports
 ---------------------------------------- */

export default random;