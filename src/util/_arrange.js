/** ----------------------------------------
    Utilities
 ---------------------------------------- */

import isType from '@util/_isType';

/** ----------------------------------------
    Arrange
 ---------------------------------------- */

/**
 * This function will take an array of items
 * that can be sorted based on a given key.
 * The type describes the order and the date
 * parameter will handle sorting of dates.
 *
 * @param { array } array - data set
 * @param { string | date } key - given key
 * @param { string } type - asc or desc
 * @param { bool } date - matching date value
 * @returns { array } - sorted array
 */

const arrange = (array, key, type) => {
    const isDate = isType(array[0][key]) === 'date';

    const convert = (a, b) => {
        a = isDate ? new Date(a[key]) : a[key];
        b = isDate ? new Date(b[key]) : b[key];
        return { a, b };
    };

    const asc = (a, b) => {
        const item = convert(a, b);
        return item.b < item.a ? 1 : item.b > item.a ? -1 : 0;
    };

    const desc = (a, b) => {
        const item = convert(a, b);
        return item.a < item.b ? 1 : item.a > item.b ? -1 : 0;
    };

    const sortType = {
        'asc': () => array.sort(asc),
        'desc': () => array.sort(desc)
    };

    return sortType[type]();
};

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default arrange;