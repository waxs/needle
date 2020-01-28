/** ----------------------------------------
    Utilities
 ---------------------------------------- */

import compareInArray from '@util/_compareInArray';
import isSingleArray from '@util/_isSingleArray';
import isType from '@util/_isType';

/** ----------------------------------------
    Find
 ---------------------------------------- */

/**
 * Simple helper that will filter through an array
 * of data, by default this will be the data as
 * stored within the constructor. Give it a key
 * and value to find matching pairs.
 *
 * @param { string } key - selected key
 * @param { string | bool | array | number } value - matching value
 * @param { array } data - array of objects
 * @returns { array } new array of filtered items
 */

function _find(key, value, data = this._data) {
    value = isSingleArray(value);
    const valueType = isType(value);

    const fnType = {
        'array': () => data.filter(item => item[key] && item[key].some(index => value.includes(index))),
        'boolean': () => data.filter(item => item[key]),
        'string': () => data.filter(item => item[key] && compareInArray(item, key, value)),
        'number': () => data.filter(item => item[key] && compareInArray(item, key, value))
    };

    return fnType[valueType]();
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default _find;