/** ----------------------------------------
    Utilities
 ---------------------------------------- */

import * as util from './../util/util';

/** ----------------------------------------
     Is
 ---------------------------------------- */

/**
 * Check for a boolean value of a specific
 * key as passed as an argument. Will only
 * look for first layer of keys.
 *
 * @param { string } key - selected key
 * @returns { Needle } object - new instance
 */

function is(key) {
    this._hasTrail();
    const filter = this._data.filter(item => item[key]);
    return this._chain(filter);
}

/** ----------------------------------------
     Has
 ---------------------------------------- */

/**
 * The has method will look if a given key
 * is present within the object, will only
 * look for the first layer of keys.
 *
 * @param { string } key - selected key
 * @returns { Needle } object - new instance
 */

function has(key) {
    this._hasTrail();
    const filter = this._data.filter(item => item.hasOwnProperty(key));
    return this._chain(filter);
}

/** ----------------------------------------
     Has Deep
 ---------------------------------------- */

/**
 * The hasDeep method will look if a given key
 * is present within the object and loop through
 * available nested objects within the given item.
 *
 * @param { string } key - selected key
 * @returns { Needle } object - new instance
 */

function hasDeep(key) {
    this._hasTrail();
    const array = [];

    const finder = (key, data = this._data, prev) => {
        data.forEach(item => {
            const obj = prev || item;
            const deep = this._deep(key, item);
            item.hasOwnProperty(key) && array.push(obj);
            deep.length && finder(key, deep.map(key => item[key]), obj);
        });
    };

    finder(key);
    return this._chain(array);
}

/** ----------------------------------------
     Find
 ---------------------------------------- */

/**
 * The find method will return a specific
 * key value pair within the object, the
 * find method only look for the first
 * layer of keys present in the item.
 *
 * @param { string } key - selected key
 * @param { string | bool | array | number } value - matching value
 * @returns { Needle } object - new instance
 */

function find(key, value) {
    this._hasTrail();
    const filter = this._find(key, value);
    return this._chain(filter);
}

/** ----------------------------------------
     Find Deep
 ---------------------------------------- */

/**
 * The findDeep method will return a specific
 * key value pair within the object, the
 * findDeep method will also look for any
 * nested object inside the item.
 *
 * @param { string } key - selected key
 * @param { string | bool | array | number } value - matching value
 * @returns { Needle } object - new instance
 */

function findDeep(key, value) {
    this._hasTrail();
    const array = [];

    const finder = (key, value, data = this._data, prev) => {
        data.forEach(item => {
            const obj = prev || item;
            const deep = this._deep(key, item);
            if(obj === item) this._find(key, value, [item]).length > 0 && !array.includes(obj) && array.push(obj);
            (deep.length === 0 || Object.keys(item).includes(key)) && this._find(key, value, [item]).length > 0 && !array.includes(obj) && array.push(obj);
            deep.length && finder(key, value, deep.map(key => item[key]), obj);
        });
    };

    finder(key, value);
    return this._chain(array);
}

/** ----------------------------------------
     Exports
 ---------------------------------------- */

export default {
    is,
    has,
    hasDeep,
    find,
    findDeep
};