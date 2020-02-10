/** ----------------------------------------
     Utility
 ---------------------------------------- */

import compareInArray from '@util/_compareInArray';

/** ----------------------------------------
     Test compareInArray() Numbers
 ---------------------------------------- */

describe('Using compareInArray() utility for comparing values', () => {
    test('It should return true on "3"', () => {
        const input = {
            array: [1, 2, 3, 5]
        };

        const util = compareInArray(input, 'array', 3);

        expect(util).toEqual(true);
    });
});

/** ----------------------------------------
    Test compareInArray() Numbers
 ---------------------------------------- */

describe('Using compareInArray() utility for comparing values', () => {
    test('It should return false', () => {
        const input = {
            array: [1, 5]
        };

        const util = compareInArray(input, 'array', 6);

        expect(util).toEqual(false);
    });
});

/** ----------------------------------------
    Test compareInArray() Strings
 ---------------------------------------- */

describe('Using compareInArray() utility for comparing values', () => {
    test('It should return true on "Lisa"', () => {
        const input = {
            array: ['Sander', 'Peter', 'Trevor', 'Lisa']
        };

        const util = compareInArray(input, 'array', 'Lisa');

        expect(util).toEqual(true);
    });
});