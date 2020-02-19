/** ----------------------------------------
    Utility
 ---------------------------------------- */

import unique from '@util/_unique';

/** ----------------------------------------
    Test unique()
 ---------------------------------------- */

describe('Using unique() for generating an array with unique values', () => {
    test('It should only return unique values', () => {
        const util = unique([1,2,2,3,4,5,5]);
        expect(util).toEqual([1,2,3,4,5]);
    });
});