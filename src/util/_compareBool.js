/** ----------------------------------------
     Compare Array
 ---------------------------------------- */

const compareBool = (key, value, data) => {
    return data.filter(item => item[key]);
};

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default compareBool;