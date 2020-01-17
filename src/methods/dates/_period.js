/** ----------------------------------------
    Period
 ---------------------------------------- */

/**
 * Basically the same as the between method
 * but will convert the values into a unix
 * timestamp and compare given values within
 * a range of the data object.
 *
 * @param { string } key - selected key
 * @param { array } values - matching values max 2
 * @returns { Needle } object - new instance
 */

function period(key, values) {
    return this.between(key, values, true);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default period;