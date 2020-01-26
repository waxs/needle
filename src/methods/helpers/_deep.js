/** ----------------------------------------
    Utilities
 ---------------------------------------- */

import isArray from '@util/_isArray';

/** ----------------------------------------
    Deep
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
    Exports
 ---------------------------------------- */

export default _deep;