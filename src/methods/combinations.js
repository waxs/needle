/** ----------------------------------------
    Utilities
 ---------------------------------------- */

import * as util from '@util/util';

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
    this._addTrail(true, 'orWhere', key, type, value);
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

export default {
    where,
    orWhere,
    _orWhere,
    andWhere,
    _andWhere
};