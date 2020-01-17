/** ----------------------------------------
    Utilities
 ---------------------------------------- */

import convertDate from '@util/_convertDate';

/** ----------------------------------------
    Upcoming
 ---------------------------------------- */

/**
 * Take next amount of "years", "months", "days" etc.
 * Needs a key (holding a date value) an amount
 * and the type of selector for instance "months".
 *
 * @param { string } selector - selected type
 * @returns { object } - match for date options
 */

function upcoming(key, amount, selector) {
    const match = this._namedDates(selector);
    const convert = convertDate(match.amount * amount, new Date(), 'future');
    return this.between(key, [new Date(), convert], true);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default upcoming;