/** ----------------------------------------
    Or Where
 ---------------------------------------- */

/**
 * The orWhere will create a new trail function
 * that will be executed once the trail comes
 * to an end.
 *
 * @param { string } key - selected key
 * @param { string } type - operator type
 * @param { string | number } value - matching value
 * @returns { Needle } object - new instance
 */

function orWhere(key, type, value) {
    (value && value.length !== 0) && this._addTrail(true, 'orWhere', key, type, value);
    return this._chain(this._data);
}

/** ----------------------------------------
    Or Where Executable
 ---------------------------------------- */

/**
 * The actual executable function that will
 * be resolved once the trail ends related
 * to the orWhere() method. The or will
 * resolve from previous data set.
 *
 * @param { string } key - selected key
 * @param { string } type - operator type
 * @param { string | number } value - matching value
 * @returns { array } - results from operation
 */

function _orWhere(key, type, value, data) {
    return this._operator(key, type, value, false, data);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export {
    orWhere,
    _orWhere
};