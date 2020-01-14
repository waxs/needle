/** ----------------------------------------
    Utilities
 ---------------------------------------- */

import evaluate from '@util/_evaluate';

/** ----------------------------------------
    Smaller
 ---------------------------------------- */

/**
 * The smaller method will compare each item
 * to a given value and return the items
 * that match the given criteria.
 *
 * @param { string } key - selected key
 * @param { string | number } value - matching value
 * @param { bool } date - will parse values to date
 * @returns { Needle } object - new instance
 */

function smaller(key, value, date = false) {
    this._hasTrail();
    const filter = this._operator(key, '<=', value, date);
    return this._chain(filter);
}

/** ----------------------------------------
     Bigger
 ---------------------------------------- */

/**
 * The bigger method will compare each item
 * to a given value and return the items
 * that match the given criteria.
 *
 * @param { string } key - selected key
 * @param { string | number } value - matching value
 * @param { bool } date - will parse values to date
 * @returns { Needle } object - new instance
 */

function bigger(key, value, date = false) {
    this._hasTrail();
    const filter = this._operator(key, '>=', value, date);
    return this._chain(filter);
}

/** ----------------------------------------
     Between
 ---------------------------------------- */

/**
 * The between method returns an array of
 * items that are in between two given
 * values.
 *
 * @param { string } key - selected key
 * @param { array } values - matching values max 2
 * @param { bool } date - will parse values to date
 * @returns { Needle } object - new instance
 */

function between(key, values, date = false) {
    this._hasTrail();

    const filter = this._data.filter(item => {
        return evaluate(item[key], '>=', values[0], date) && evaluate(item[key], '<=', values[1], date);
    });

    return this._chain(filter);
}

/** ----------------------------------------
     Equal
 ---------------------------------------- */

/**
 * The equal method will look for a matching
 * item within the data array. This method
 * uses the operator helper method.
 *
 * @param { string } key - selected key
 * @param { number } value - matching value
 * @returns { Needle } object - new instance
 */

function equal(key, value) {
    this._hasTrail();
    const filter = this._operator(key, '=', value);
    return this._chain(filter);
}

/** ----------------------------------------
     Minimum
 ---------------------------------------- */

/**
 * The min method will map the data array
 * and retrieve minimum of a given key.
 *
 * @param { string } key - selected key
 * @returns { Needle } object - new instance
 */

function min(key) {
    this._hasTrail();
    const min = Math.min(...this._data.map(item => item[key]));
    return this.find(key, min);
}

/** ----------------------------------------
     Maximum
 ---------------------------------------- */

/**
 * The max method will map the data array
 * and retrieve maximum of a given key.
 *
 * @param { string } key - selected key
 * @returns { Needle } object - new instance
 */

function max(key) {
    this._hasTrail();
    const max = Math.max(...this._data.map(item => item[key]));
    return this.find(key, max);
}

/** ----------------------------------------
     Positive
 ---------------------------------------- */

/**
 * Return all positive values from an array
 *
 * @param { string } key - selected key
 * @returns { Needle } object - new instance
 */

function positive(key) {
    this._hasTrail();
    const filter = this._operator(key, '>=', 0);
    return this._chain(filter);
}

/** ----------------------------------------
     Netagtive
 ---------------------------------------- */

/**
 * Return all negative values from an array
 *
 * @param { string } key - selected key
 * @returns { Needle } object - new instance
 */

function negative(key) {
    this._hasTrail();
    const filter = this._operator(key, '<', 0);
    return this._chain(filter);
}

/** ----------------------------------------
     Sum
 ---------------------------------------- */

/**
 * The sum method will retrieve the sum of
 * a given key, meaning sum every value of
 * the given key present within the data array.
 *
 * @param { string } key - selected key
 * @returns { number } amount of sum of given key
 */

function sum(key) {
    this._hasTrail();
    this._calc = this._data.reduce((total, item) => total + item[key], 0);
    return this._calc;
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default {
    bigger,
    smaller,
    between,
    equal,
    min,
    max,
    positive,
    negative,
    sum
};