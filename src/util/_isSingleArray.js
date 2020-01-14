/** ----------------------------------------
     Utilities
 ---------------------------------------- */

import isArray from '@util/_isArray';

/** ----------------------------------------
    Is Single Array
 ---------------------------------------- */

const isSingleArray = value => isArray(value) && value.length === 1 && value[0] || value;

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default isSingleArray;