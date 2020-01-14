/** ----------------------------------------
     Compare Value
 ---------------------------------------- */

const compareValue = (key, value, data) => {
    return data.filter(item => item[key] && item[key] === value);
};

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default compareValue;