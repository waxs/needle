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

function deep(key, item) {
    return item && Object.keys(item).filter(key => {
        const isNotArray = !isArray(item[key]);
        const isObject = typeof item[key] === 'object';
        return isNotArray && isObject && item;
    });
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default deep;