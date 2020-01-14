/** ----------------------------------------
     Utilities
 ---------------------------------------- */

import leapYear from '@util/_leapYear';

/** ----------------------------------------
    Configuration
 ---------------------------------------- */

const months = [
    {
        index: 0,
        month: 'jan',
        days: 31
    },
    {
        index: 1,
        month: 'feb',
        days: leapYear ? 28 : 29
    },
    {
        index: 2,
        month: 'mar',
        days: 31
    },
    {
        index: 3,
        month: 'apr',
        days: 30
    },
    {
        index: 4,
        month: 'may',
        days: 31
    },
    {
        index: 5,
        month: 'jun',
        days: 30
    },
    {
        index: 6,
        month: 'jul',
        days: 31
    },
    {
        index: 7,
        month: 'aug',
        days: 31
    },
    {
        index: 8,
        month: 'sep',
        days: 30
    },
    {
        index: 9,
        month: 'oct',
        days: 31
    },
    {
        index: 10,
        month: 'nov',
        days: 30
    },
    {
        index: 11,
        month: 'dec',
        days: 31
    }
];

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default months;