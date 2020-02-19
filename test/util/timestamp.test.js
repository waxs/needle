/** ----------------------------------------
    Utility
 ---------------------------------------- */

import stamp from '@util/_stamp';

/** ----------------------------------------
    Test stamp()
 ---------------------------------------- */

describe('Using stamp() for generating a timestamp', () => {
    test('It should contain 10 characters', () => {
        const util = stamp();
        expect(util.toString().length).toEqual(10);
    });
});