/** ----------------------------------------
    Utilities
 ---------------------------------------- */

import isDate from '@util/_isDate';

/** ----------------------------------------
    Is Type
 ---------------------------------------- */

const isType = (value) => {
    return (typeof value !== 'number' && !isNaN(isDate(value)) && 'date') || Array.isArray(value) && 'array' || typeof value;
};

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default isType;