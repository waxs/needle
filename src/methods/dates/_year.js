/** ----------------------------------------
    Year
 ---------------------------------------- */

/**
 * Shorthand for working with years, this
 * method accepts the year where the selection
 * needs to take place.
 *
 * @param { string } key - selected key
 * @param { number } year - selected year
 * @returns { Needle } object - new instance
 */

function year(key, year) {
    return this.between(key, [`1/1/${ year }`, `12/31/${ year }`], true);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default year;