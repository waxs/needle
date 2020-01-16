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

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default print;