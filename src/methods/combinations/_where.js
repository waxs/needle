/** ----------------------------------------
    Where
 ---------------------------------------- */

/**
 * The where operator can execute a series
 * of commands, combining multiple criteria
 * that need to be matched.
 *
 * @param { string } key - selected key
 * @param { string } type - operator type
 * @param { string | number } value - matching value
 * @returns { Needle } object - new instance
 */

function where(key, type, value) {
    this._hasTrail();
    this._trail['data'] = this._data;
    const filter = this._operator(key, type, value);
    this._trail['prev'] = filter;
    return this._chain(filter);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default where;