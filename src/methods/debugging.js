/** ----------------------------------------
    Utilities
 ---------------------------------------- */

import * as util from './../util/util';

/** ----------------------------------------
     Logging
 ---------------------------------------- */

/**
 * The log method is used for testing and
 * debugging. It will log the latest state
 * of the data array to the console. It can
 * be limited to a given number of items.
 *
 * @param { number } number - amount of items
 * @yields { array } - will console log array of items
 */

function log(number) {
    this._hasTrail();
    console.log(number && this.take(number) || this._data);
}

/** ----------------------------------------
     Printing
 ---------------------------------------- */

/**
 * The print method is used for testing and
 * debugging. It will print the items of the
 * data array into the DOM, making results
 * visible, it will look for a element with
 * the id "#result" by default, and element
 * can also be provided as an argument, if both
 * are unable to match, the function will execute
 * on the body.
 *
 * @param { string } el - CSS selector for DOM element
 * @yields { string } print string to DOM
 */

function print(el) {
    this._hasTrail();
    const result = document.querySelector('#result' || el) || document.body;
    result.textContent = [this._data].map(item => JSON.stringify(item));
}

/**
 * With the random method a random amount
 * of items can be returned from the latest
 * data state. This makes it easy to quickly
 * test multiple sets of data.
 *
 * @param { number } number - amount of items
 * @returns { Needle } object - new instance
 */

/** ----------------------------------------
     Randomize
 ---------------------------------------- */

function random(number = 1) {
    this._hasTrail();
    let array = [];

    while (array.length !== number || array.length === this._data.length) {
        const random = Math.floor(Math.random() * (1 + this._data.length - 1));
        array.indexOf(this._data[random]) === -1 && array.push(this._data[random]);
    }

    return this._chain(array);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default {
    log,
    print,
    random
};