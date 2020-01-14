/** ----------------------------------------
    Utilities
 ---------------------------------------- */

import isArray from '@util/_isArray';

/** ----------------------------------------
    Compare In Array
 ---------------------------------------- */

const compareInArray = (item, key, value) => {
    return isArray(item[key]) ? item[key].includes(value) : item[key] === value;
};

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default compareInArray;