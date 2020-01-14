/** ----------------------------------------
    Utilities
 ---------------------------------------- */

import leapYear from '@util/_leapYear';

/** ----------------------------------------
    Configuration
 ---------------------------------------- */

const period = () => {
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();

    return [
        {
            name: 'days',
            amount: 1
        },
        {
            name: 'weeks',
            amount: 7
        },
        {
            name: 'months',
            year: year,
            month: month,
            amount: 30
        },
        {
            name: 'quarters',
            year: year,
            amount: Math.round((leapYear ? 366 : 365) / 4)
        },
        {
            name: 'years',
            year: year,
            amount: leapYear ? 366 : 365
        }
    ];
};

/** ----------------------------------------
    Exports
 ---------------------------------------- */

export default period;