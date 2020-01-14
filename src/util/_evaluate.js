/** ----------------------------------------
    Evaluate
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
    Exports
 ---------------------------------------- */

export default evaluate;