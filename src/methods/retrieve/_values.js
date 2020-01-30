/** ----------------------------------------
     Utilities
 ---------------------------------------- */

import flatten from '@util/_flatten';
import isArray from '@util/_isArray';
import unique from '@util/_unique';

/** ----------------------------------------
    Values
 ---------------------------------------- */

/**
 * The values method will retrieve an array of values
 * matching a key available in the item. This function
 * will not chain at is an end of the road utility.
 *
 * @param { string } key - selected key to be retrieved
 * @returns { object } - will return an array with values
 */

function values(key) {
    this._hasTrail();
    const array = [];

    const finder = (key, data = this._data, prev) => {
        data.forEach(item => {
            const obj = prev || item;
            const deep = this._deep(key, item);
            item.hasOwnProperty(key) && array.push(item[key]);
            deep.length && finder(key, deep.map(key => item[key]), obj);
        });
    };

    finder(key);
    return unique(flatten(array));
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default values;