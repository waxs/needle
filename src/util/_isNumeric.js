/** ----------------------------------------
    Is Numeric
 ---------------------------------------- */

const isNumeric = value => !isNaN(parseFloat(value)) && isFinite(value);

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default isNumeric;