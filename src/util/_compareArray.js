/** ----------------------------------------
     Compare Array
 ---------------------------------------- */

const compareArray = (key, value, data) => {
    return data.filter(item => item[key] && item[key].some(index => value.includes(index)));
};

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default compareArray;