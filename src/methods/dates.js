/** ----------------------------------------
    Utilities
 ---------------------------------------- */

import * as util from './../util/util';

/** ----------------------------------------
    Before
 ---------------------------------------- */

/**
 * Basically the same as the smaller method
 * but will convert the value into a unix
 * timestamp and compare given value within
 * the data object.
 *
 * @param { string } key - selected key
 * @param { string } value - matching value
 * @returns { Needle } object - new instance
 */

function before(key, value) {
    return this.smaller(key, value, true);
}

/** ----------------------------------------
     After
 ---------------------------------------- */

/**
 * Basically the same as the bigger method
 * but will convert the value into a unix
 * timestamp and compare given value within
 * the data object.
 *
 * @param { string } key - selected key
 * @param { string } value - matching value
 * @returns { Needle } object - new instance
 */

function after(key, value) {
    return this.bigger(key, value, true);
}

/** ----------------------------------------
     Period
 ---------------------------------------- */

/**
 * Basically the same as the between method
 * but will convert the values into a unix
 * timestamp and compare given values within
 * a range of the data object.
 *
 * @param { string } key - selected key
 * @param { array } values - matching values max 2
 * @returns { Needle } object - new instance
 */

function period(key, values) {
    return this.between(key, values, true);
}

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
    const months = util.dateOptions();
    const date = this._find('month', month, months)[0];
    const start = util.convertDate(0, `${ date.month }/1/${ year }`);
    const end = util.convertDate(0, `${ date.month }/${ date.days }/${ year }`);
    return this.between(key, [start, end], true);
}

/** ----------------------------------------
     Year
 ---------------------------------------- */

/**
 * Shorthand for working with years, this
 * method accepts the year where the selection
 * needs to take place.
 *
 * @param { string } key - selected key
 * @param { number } year - selected year
 * @returns { Needle } object - new instance
 */

function year(key, year) {
    return this.between(key, [`1/1/${ year }`, `12/31/${ year }`], true);
}

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
    const duration = util.durationOption();
    return this._find('name', selector, duration)[0];
}

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
    const match = this._namedDates(selector);
    const convert = util.convertDate(match.amount * amount);
    return this.between(key, [convert, new Date()], true);
}

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
    const convert = util.convertDate(match.amount * amount, new Date(), 'future');
    return this.between(key, [new Date(), convert], true);
}

/** ----------------------------------------
     Exports
 ---------------------------------------- */

export default {
    before,
    after,
    period,
    month,
    year,
    _namedDates,
    previous,
    upcoming
};