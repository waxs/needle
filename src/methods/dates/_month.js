/** ----------------------------------------
    Utilities
 ---------------------------------------- */

import convertDate from '@util/_convertDate';
import dateOptions from '@util/_dateOptions';

/** ----------------------------------------
    Month
 ---------------------------------------- */

/**
 * Shorthand for working with months, this
 * method accepts the name of the month and
 * year to select a period of dates.
 *
 * @param { string } key - selected key
 * @param { string } month - selected month
 * @param { number } year - selected year
 * @returns { Needle } object - new instance
 */

function month(key, month, year) {
    const months = dateOptions();
    const date = this._find('month', month, months)[0];
    const start = convertDate(0, `${ date.month }/1/${ year }`);
    const end = convertDate(0, `${ date.month }/${ date.days }/${ year }`);
    return this.between(key, [start, end], true);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default month;