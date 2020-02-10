/** ----------------------------------------
     Utility
 ---------------------------------------- */

import isArray from '@util/_isArray';

/** ----------------------------------------
     Test isArray() with Array
 ---------------------------------------- */

describe('Using isArray() for testing an array value', () => {
    test('It should return true', () => {
        const input = [1,2,3];
        const util = isArray(input);
        expect(util).toEqual(true);
    });
});

/** ----------------------------------------
    Test isArray() with Object
 ---------------------------------------- */

describe('Using isArray() for testing an object value', () => {
    test('It should return false', () => {
        const input = { name: 'Sander' };
        const util = isArray(input);
        expect(util).toEqual(false);
    });
});