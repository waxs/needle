/** ----------------------------------------
    After
 ---------------------------------------- */

/**
 * Basically the same as the bigger method
 * but will convert the value into a unix
 * timestamp and compare given value within
 * the data object.
 *
 * @param { string } key - selected key
 * @param { string } value - matching value
 * @returns { Needle } object - new instance
 */

function after(key, value) {
    return this.bigger(key, value, true);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default after;