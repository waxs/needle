/** ----------------------------------------
     Utility
 ---------------------------------------- */

import convertDate from '@util/_convertDate';

/** ----------------------------------------
     Test convertDate()
 ---------------------------------------- */

describe('Using convertDate() utility for converting a date value', () => {
    test('It should return true on 7 (minus 5 days)', () => {
        const input = '2/12/2020';

        const util = convertDate(5, input);

        expect(util.getDate()).toEqual(7);
    });
});