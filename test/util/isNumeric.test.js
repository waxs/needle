/** ----------------------------------------
     Utility
 ---------------------------------------- */

import isNumeric from '@util/_isNumeric';

/** ----------------------------------------
     Test isNumeric() with Number
 ---------------------------------------- */

describe('Using isNumeric() for testing a numeric value', () => {
    test('It should return true', () => {
        const input = 1;
        const util = isNumeric(1);
        expect(util).toEqual(true);
    });
});

/** ----------------------------------------
    Test isNumeric() with String
 ---------------------------------------- */

describe('Using isNumeric() for testing a non numeric value', () => {
    test('It should return false', () => {
        const input = 'Peter';
        const util = isNumeric(input);
        expect(util).toEqual(false);
    });
});