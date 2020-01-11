/** ----------------------------------------
     Timestamp
 ---------------------------------------- */

const stamp = () => Math.floor(Date.now() / 1000);

/** ----------------------------------------
     Date
 ---------------------------------------- */

const unix = date => Math.round(new Date().getTime() / 1000);

/** ----------------------------------------
    Date Converter
 ---------------------------------------- */

const yearLeap = () => new Date().getFullYear() % 4 === 0;

const dateOptions = year => {
    return [
        {
            index: 0,
            month: 'jan',
            days: 31
        },
        {
            index: 1,
            month: 'feb',
            days: yearLeap ? 28 : 29
        },
        {
            index: 2,
            month: 'mar',
            days: 31
        },
        {
            index: 3,
            month: 'apr',
            days: 30
        },
        {
            index: 4,
            month: 'may',
            days: 31
        },
        {
            index: 5,
            month: 'jun',
            days: 30
        },
        {
            index: 6,
            month: 'jul',
            days: 31
        },
        {
            index: 7,
            month: 'aug',
            days: 31
        },
        {
            index: 8,
            month: 'sep',
            days: 30
        },
        {
            index: 9,
            month: 'oct',
            days: 31
        },
        {
            index: 10,
            month: 'nov',
            days: 30
        },
        {
            index: 11,
            month: 'dec',
            days: 31
        }
    ];
};

const durationOption = () => {
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();

    return [
        {
            name: 'days',
            amount: 1
        },
        {
            name: 'weeks',
            amount: 7
        },
        {
            name: 'months',
            year: year,
            month: month,
            amount: 30
        },
        {
            name: 'quarters',
            year: year,
            amount: Math.round((yearLeap ? 366 : 365) / 4)
        },
        {
            name: 'years',
            year: year,
            amount: yearLeap ? 366 : 365
        }
    ];
};

const convertDate = (value, convert, direction = 'history') => {
    const date = convert ? new Date(convert) : new Date();

    const dir = {
        history: date.getTime() - (value * 24 * 60 * 60 * 1000),
        future: date.getTime() + (value * 24 * 60 * 60 * 1000)
    };

    const calc = new Date(dir[direction]);

    const day = calc.getDate();
    const month = calc.getMonth() + 1;
    const year = calc.getFullYear();

    return calc;
};

const convertDateType = (type, value, date = new Date()) => {
    time = date.getTime();

    const types = {
        days: time - (value * 24 * 60 * 60 * 1000),
        hours: time - (value * 24 * 60 * 60 * 1000),
    };
};

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
    convertDate,
    convertDateType,
    dateOptions,
    durationOption,
    evaluate,
    isArray,
    isType,
    singleArray,
    isNumeric,
    stamp,
    unique,
    unix
};