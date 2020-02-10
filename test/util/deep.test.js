/** ----------------------------------------
     Utility
 ---------------------------------------- */

import deep from '@util/_deep';

/** ----------------------------------------
     Test convertDate()
 ---------------------------------------- */

describe('Using deep() for finding nested values in object', () => {
    test('It should return true on 7 (minus 5 days)', () => {
        const input = {
            name: 'Sander',
            contact: {
                website: 'http://sanderhidding.nl'
            }
        };

        const util = deep('website', input);

        expect(util).toEqual(['contact']);
    });
});