/** ----------------------------------------
    Utility
 ---------------------------------------- */

import objReduce from '@util/_objReduce';

/** ----------------------------------------
    Test objReduce()
 ---------------------------------------- */

describe('Using objReduce() for flatting objects', () => {
    test('It should return a new flatted object', () => {
        const input = {
            name: 'Sander',
            email: 'hi@sanderhidding.nl',
            website: 'sanderhidding.nl'
        };

        const util = objReduce(['name'], input);

        expect(util).toEqual('Sander');
    });
});