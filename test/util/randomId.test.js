/** ----------------------------------------
    Utility
 ---------------------------------------- */

import randomId from '@util/_randomId';

/** ----------------------------------------
    Test randomId()
 ---------------------------------------- */

describe('Using randomId() for generating a random ID', () => {
    test('It should return a value', () => {
        const util = randomId();
        expect(util).toBeTruthy();
    });
});

describe('Using randomId() for generating a random ID', () => {
    test('It should contain 4 characters', () => {
        const util = randomId();
        expect(util.length).toEqual(4)
    });
});