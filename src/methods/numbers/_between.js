/** ----------------------------------------
    Utilities
 ---------------------------------------- */

import evaluate from '@util/_evaluate';
import isType from '@util/_isType';

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
    const isDate = isType(values[0]) === 'date';

    const filter = this._data.filter(item => {
        return evaluate(item[key], '>=', values[0], isDate || date) && evaluate(item[key], '<=', values[1], isDate || date);
    });

    return this._chain(filter);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default between;