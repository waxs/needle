/** ----------------------------------------
    Utilities
 ---------------------------------------- */

import convertDate from '@util/_convertDate';

/** ----------------------------------------
    Previous
 ---------------------------------------- */

/**
 * Take last amount of "years", "months", "days" etc.
 * Needs a key (holding a date value) an amount
 * and the type of selector for instance "months".
 *
 * @param { string } selector - selected type
 * @returns { object } - match for date options
 */

function previous(key, amount, selector) {
    const getPeriod = this._namedDates(selector);
    const convertedDate = convertDate(getPeriod.amount * amount);
    return this.between(key, [convertedDate, new Date()], true);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default previous;