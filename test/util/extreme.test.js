/** ----------------------------------------
     Utility
 ---------------------------------------- */

import extreme from '@util/_extreme';

/** ----------------------------------------
    Mockup Data
 ---------------------------------------- */

const input = [
    {
        age: 30
    },
    {
        age: 40
    },
    {
        age: 20
    }
];

/** ----------------------------------------
     Test extreme() Minimum
 ---------------------------------------- */

describe('Using extreme() for finding minimum value', () => {
    test('It should return age 20', () => {
        const util = extreme(input, 'age', 'min');
        expect(util).toEqual(20);
    });
});

/** ----------------------------------------
    Test extreme() Maximum
 ---------------------------------------- */

describe('Using extreme() for finding minimum value', () => {
    test('It should return age 20', () => {
        const util = extreme(input, 'age', 'max');
        expect(util).toEqual(40);
    });
});