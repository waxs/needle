/** ----------------------------------------
    Utilities
 ---------------------------------------- */

import isArray from '@util/_isArray';

/** ----------------------------------------
    Evaluate
 ---------------------------------------- */

const evaluate = (item, operator, value, date) => {
    item = date ? new Date(item) : item;
    value = date ? new Date(value) : value;

    const compare = value => {
        return {
            '>' : item > value,
            '<' : item < value,
            '>=' : item >= value,
            '<=' : item <= value,
            '=' : item === value
        };
    };

    const compareArray = array => array.some(item => compare(item)[operator]);
    return isArray(value) ? compareArray(value) : compare(value)[operator];
};

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default evaluate;