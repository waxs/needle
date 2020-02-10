/** ----------------------------------------
     Utility
 ---------------------------------------- */

import doubles from '@util/_doubles';

/** ----------------------------------------
     Test doubles() Single Value
 ---------------------------------------- */

describe('Using doubles() for finding double values', () => {
    test('It should return count of 3 on the number 2', () => {
        const input = [1,2,2,5,1,2,4,3];

        const util = doubles(input);

        expect(util).toEqual({
            count: 3,
            result: [2]
        });
    });
});

/** ----------------------------------------
    Test doubles() Multi Value
 ---------------------------------------- */

describe('Using doubles() for finding double values', () => {
    test('It should return count of 3 on the number 2 and 5', () => {
        const input = [1,5,2,2,5,1,2,4,3,5];

        const util = doubles(input);

        expect(util).toEqual({
            count: 3,
            result: [2,5]
        });
    });
});