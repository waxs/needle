/** ----------------------------------------
     Utility
 ---------------------------------------- */

import isSingleArray from '@util/_isSingleArray';

/** ----------------------------------------
     Test isSingleArray()
 ---------------------------------------- */

describe('Using isSingleArray() for resolving single value', () => {
    test('It should return 1', () => {
        const input = [1];
        const util = isSingleArray(input);
        expect(util).toEqual(1);
    });
});

/** ----------------------------------------
 Test isSingleArray()
 ---------------------------------------- */

describe('Using isSingleArray() for resolving multi value', () => {
    test('It should return [1,2]', () => {
        const input = [1,2];
        const util = isSingleArray(input);
        expect(util).toEqual([1,2]);
    });
});