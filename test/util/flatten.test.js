/** ----------------------------------------
     Utility
 ---------------------------------------- */

import flatten from '@util/_flatten';

/** ----------------------------------------
     Test extreme() Minimum
 ---------------------------------------- */

describe('Using flatten() for flatten multi array', () => {
    test('It should flatten to single array', () => {
        const input = [[1,2], [3,4], [5,6]];
        const util = flatten(input);
        expect(util).toEqual([1,2,3,4,5,6]);
    });
});