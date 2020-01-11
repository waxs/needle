/** ----------------------------------------
     Timestamp
 ---------------------------------------- */

const stamp = () => Math.floor(Date.now() / 1000);

/** ----------------------------------------
     Date
 ---------------------------------------- */

const unix = date => Math.round(new Date().getTime() / 1000);

/** ----------------------------------------
     Is Numberic
 ---------------------------------------- */

const isNumeric = value => {
    return !isNaN(parseFloat(value)) && isFinite(value);
};

/** ----------------------------------------
    Is Array
 ---------------------------------------- */

const isType = value => {
    return Array.isArray(value) && 'array' || typeof value;
};

const isArray = value => {
    return Array.isArray(value);
};

const singleArray = value => {
    return isArray && value.length === 1 && value[0] || value;
};

/** ----------------------------------------
     Compare
 ---------------------------------------- */

const compareArray = (key, value, data) => {
    return data.filter(item => item[key] && item[key].some(index => value.includes(index)));
};

const compareBool = (key, value, data) => {
    return data.filter(item => item[key]);
};

const compareValue = (key, value, data) => {
    return data.filter(item => item[key] && item[key] === value);
};

const compareInArray = (item, key, value) => {
    return isArray(item[key]) ? item[key].includes(value) : item[key] === value;
};

/** ----------------------------------------
     Operator
 ---------------------------------------- */

const evaluate = (item, operator, value, date) => {
    item = date ? new Date(item) : item;
    value = date ? new Date(value) : value;

    const compare = {
        '>' : item > value,
        '<' : item < value,
        '>=' : item >= value,
        '<=' : item <= value,
        '=' : item === value
    };

    return compare[operator];
};

/** ----------------------------------------
     Sorting
 ---------------------------------------- */

const arrange = (array, key, type, date = false) => {
    const convert = (a, b) => {
        a = date ? new Date(a[key]) : a[key];
        b = date ? new Date(b[key]) : b[key];
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
     Unique String
 ---------------------------------------- */

const unique = () => (((1+Math.random())*0x10000)|0).toString(16).substring(1);

/** ----------------------------------------
     Exports
 ---------------------------------------- */

export {
    arrange,
    compareArray,
    compareBool,
    compareValue,
    compareInArray,
    evaluate,
    isArray,
    isType,
    singleArray,
    isNumeric,
    stamp,
    unique,
    unix
};