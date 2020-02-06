/** ----------------------------------------
    Utilities
 ---------------------------------------- */

import periodOptions from '@util/_periodOptions';

/** ----------------------------------------
    Named Dates
 ---------------------------------------- */

/**
 * Shorthand for working with years, this
 * method accepts the year where the selection
 * needs to take place.
 *
 * @param { string } selector - selected type
 * @returns { object } - match for date options
 */

function _namedDates(selector) {
    const getPeriod = periodOptions();
    return this._find('name', selector, getPeriod)[0];
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default _namedDates;
