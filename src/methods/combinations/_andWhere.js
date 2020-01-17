/** ----------------------------------------
    And Where
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

function andWhere(key, type, value) {
    this._addTrail(true, 'andWhere', key, type, value);
    return this._chain(this._data);
}

/** ----------------------------------------
    And Where Executable
 ---------------------------------------- */

/**
 * The actual executable function that will
 * be resolved once the trail ends related
 * to the andWhere() method. The and will
 * resolve from original data set.
 *
 * @param { string } key - selected key
 * @param { string } type - operator type
 * @param { string | number } value - matching value
 * @returns { array } - results from operation
 */

function _andWhere(key, type, value, data) {
    return this._operator(key, type, value, false, data);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export {
    andWhere,
    _andWhere
};