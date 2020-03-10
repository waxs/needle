/** ----------------------------------------
     Utility
 ---------------------------------------- */

import isDate from '@util/_isDate';

/** ----------------------------------------
     Test isDate() with Date
 ---------------------------------------- */

describe('Using isDate() for testing a date value', () => {
    test('It should return true', () => {
        const input = '1-11-2020';
        const util = isDate(input) / 1000;
        expect(typeof util).toBe('number');
    });
});

/** ----------------------------------------
    Test isDate() with Non Date
 ---------------------------------------- */

describe('Using isDate() for testing a non date value', () => {
    test('It should return false', () => {
        const input = '11-2020';
        const util = isDate(input);
        expect(util).toEqual(NaN);
    });
});