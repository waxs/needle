/** ----------------------------------------
     Timestamp
 ---------------------------------------- */

const stamp = () => Math.floor(Date.now() / 1000);

/** ----------------------------------------
     Date
 ---------------------------------------- */

const unix = date => new Date(date).getTime() / 1000;

/** ----------------------------------------
     Operator
 ---------------------------------------- */

const evaluate = (item, operator, value, date) => {
    item = date ? unix(item) : item;
    value = date ? unix(value) : value;

    const compare = {
        '>' : item > value,
        '<' : item < value,
        '>=' : item >= value,
        '<=' : item <= value,
        '=' : item === value
    };

    return compare[operator];
}

/** ----------------------------------------
     Sorting
 ---------------------------------------- */

const arrange = (array, key, type) => {
    const asc = (a, b) => b[key] < a[key] ? 1 : b[key] > a[key] ? -1 : 0;
    const desc = (a, b) => a[key] < b[key] ? 1 : a[key] > b[key] ? 1 : 0;

    const sortType = {
        'asc': () => array.sort(asc),
        'desc': () => array.sort(desc)
    };

    return sortType[type]()
}

/** ----------------------------------------
     Exports
 ---------------------------------------- */

export {
    arrange,
    evaluate,
    stamp,
    unix
}
