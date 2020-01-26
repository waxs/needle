/** ----------------------------------------
    Utilities
 ---------------------------------------- */

import isType from '@util/_isType';

/** ----------------------------------------
    Take
 ---------------------------------------- */

/**
 * The take method will resolve a selected
 * amount of items from the data array and
 * return all by default, if more items are
 * required it will limit itself to the
 * total amount of items present.
 *
 * @param { number } amount - selected amount of items
 * @param { bool } info - will return info about the query if true
 * @returns { array } - array of (manipulated) data
 */

function take(amount = this._data.length, info) {
    this._hasTrail();
    if(isType(amount) === 'string' && amount === 'all') amount = this._data.length;
    const select = this._data.slice(0, amount);
    const all = !amount || amount >= this._data.length;
    const result = all && this._data || select;
    this.info = result.length;
    return info && { results: result, info: this.info } || result || [];
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default take;