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
     Exports
 ---------------------------------------- */

export default log;