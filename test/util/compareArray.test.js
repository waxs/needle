/** ----------------------------------------
     Utility
 ---------------------------------------- */

import compareArray from '@util/_compareArray';

/** ----------------------------------------
     Test compareArray()
 ---------------------------------------- */

describe('Using compareArray() utility for comparing values', () => {
    test('It should return 2 items matching 4 and 5', () => {
        const input = [
            {
                array: [1, 2, 3, 5]
            },
            {
                array: [3, 4]
            },
            {
                array: [1, 2]
            }
        ];

        const output = [
            {
                array: [1, 2, 3, 5]
            },
            {
                array: [3,4]
            }
        ];

        const util = compareArray('array', [4, 5], input);

        expect(util).toEqual(output);
    });
});