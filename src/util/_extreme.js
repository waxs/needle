/** ----------------------------------------
    Extreme
 ---------------------------------------- */

const extreme = (array, key, type) => Math[type](...array.map(item => item[key]));

/** ----------------------------------------
 Exports
 ---------------------------------------- */

export default extreme;