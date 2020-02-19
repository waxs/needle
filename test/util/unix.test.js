/** ----------------------------------------
    Utility
 ---------------------------------------- */

import unix from '@util/_unix';

/** ----------------------------------------
    Test unix()
 ---------------------------------------- */

describe('Using unix() for retrieving a unix timestamp', () => {
    test('It should return a value', () => {
        const util = unix('12/2/2020');
        expect(util).toBeTruthy();
    });
});