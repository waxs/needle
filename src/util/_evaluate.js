/** ----------------------------------------
    Utilities
 ---------------------------------------- */

import isArray from '@util/_isArray';
import isSingleArray from '@util/_isSingleArray';

/** ----------------------------------------
    Evaluate
 ---------------------------------------- */

const evaluate = (item, operator, value, date) => {
    item = date ? new Date(item) : item;
    value = date ? new Date(value) : value;

    const compare = value => {
        item = isSingleArray(item);

        if(isArray(item)) {
            const multiple = item.map(index => worker(index, value));
            return multiple.some(item => item);
        }

        return worker(item, value);
    };

    const worker = (item, check = value) => {
        const obj = {
            '>' : item > check,
            '<' : item < check,
            '>=' : item >= check,
            '<=' : item <= check,
            '=' : item === check,
            '!=' : item !== check
        };

        return obj[operator];
    };

    const type = operator === '=' ? 'some' : 'every';
    const compareArray = array => array[type](item => compare(item));
    return isArray(value) ? compareArray(value) : compare(value);
};

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default evaluate;