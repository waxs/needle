/** ----------------------------------------
     Utility
 ---------------------------------------- */

import objPath from '@util/_objPath';

/** ----------------------------------------
     Test objPath()
 ---------------------------------------- */

describe('Using objPath() for splitting a string', () => {
    test('It should return an array of items', () => {
        const input = 'contact.website';
        const util = objPath(input);
        expect(util).toEqual(['contact', 'website']);
    });
});