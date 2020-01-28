/** ----------------------------------------
    Utilities
 ---------------------------------------- */

import compareInArray from '@util/_compareInArray';
import isSingleArray from '@util/_isSingleArray';
import isArray from '@util/_isArray';
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

    const arrayValue = item => value.includes(item[key]);
    const arrayData = item => item[key].some(index => value.includes(index));
    const singleValue = item => item[key] && compareInArray(item, key, value);

    const fnType = {
        'array': () => data.filter(item => isArray(item[key]) ? arrayData(item) : arrayValue(item)),
        'boolean': () => data.filter(item => item[key]),
        'string': () => data.filter(singleValue),
        'number': () => data.filter(singleValue)
    };

    return fnType[valueType]();
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default _find;