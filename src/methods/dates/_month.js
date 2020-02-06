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
    const getMonths = dateOptions();
    const findDate = this._find('month', month, getMonths)[0];
    const startDate = convertDate(0, `${ findDate.month }/1/${ year }`);
    const endDate = convertDate(0, `${ findDate.month }/${ findDate.days }/${ year }`);
    return this.between(key, [startDate, endDate], true);
}

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default month;