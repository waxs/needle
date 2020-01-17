/** ----------------------------------------
    Before
 ---------------------------------------- */

/**
 * Basically the same as the smaller method
 * but will convert the value into a unix
 * timestamp and compare given value within
 * the data object.
 *
 * @param { string } key - selected key
 * @param { string } value - matching value
 * @returns { Needle } object - new instance
 */

function before(key, value) {
    return this.smaller(key, value, true);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default before;
