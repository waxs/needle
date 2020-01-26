/** ----------------------------------------
    Utilities
 ---------------------------------------- */

import evaluate from '@util/_evaluate';

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

export default _operator;