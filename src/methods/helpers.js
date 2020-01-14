/** ----------------------------------------
    Utilities
 ---------------------------------------- */

import compareInArray from '@util/_compareInArray';
import evaluate from '@util/_evaluate';
import isArray from '@util/_isArray';
import isSingleArray from '@util/_isSingleArray';
import isType from '@util/_isType';

/** ----------------------------------------
    Chain Helper
 ---------------------------------------- */

/**
 * The chain method returns a new instance
 * of the Needle class.
 *
 * @param { array } data - new array of manipulated data
 * @returns { Needle } object - new instance
 */

function _chain(data) {
    return new Needle(data, this._trail);
}

/** ----------------------------------------
    Filter Deep Helper
 ---------------------------------------- */

/**
 * The deep helper will look for keys that
 * contain object values (nested objects).
 *
 * @param { string } key - selected key
 * @param { object } item - base object
 * @returns { array } - filtered items
 */

function _deep(key, item) {
    return Object.keys(item).filter(key => !isArray(item[key]) && typeof item[key] === 'object' && item);
}

/** ----------------------------------------
     Find Helper
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
    Format Path Helper
 ---------------------------------------- */

/**
 * This helper will return an array containing
 * each given key from a dot notation in string
 * format, for instance "contact.email.work".
 *
 * @param { string } path - using object dot notation
 * @returns { array } array containing split of string
 */

function _objPath(path) {
    return path.split('.');
}

/** ----------------------------------------
    Object Reducer Helper
 ---------------------------------------- */

/**
 * This helper will reduce given keys
 * to a new object.
 *
 * @param { array } array - array of keys to be maintained
 * @param { object } item - original object
 * @returns { array } - manipulated object
 */

function _objReduce(array, item) {
    return array.map(key => key).reduce((array, key) => array[key], item);
}

/** ----------------------------------------
    Operator Helper
 ---------------------------------------- */

/**
 * The operator helper can handle multiple
 * operation based on given arguments. The type
 * will determine the type operation executed.
 *
 * @param { string } key - selected key
 * @param { string } type - operator type
 * @param { string | number } value - matching value
 * @param { bool } date - will parse values to date
 * @returns { array } - filtered data
 */

function _operator(key, type, value, date = false, data = this._data) {
    return data.filter(item => evaluate(item[key], type, value, date));
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default {
    _chain,
    _deep,
    _find,
    _objPath,
    _objReduce,
    _operator
};