/** ----------------------------------------
    Mockup Data
 ---------------------------------------- */

import { data } from '@mock/advanced';

/** ----------------------------------------
     Needle
 ---------------------------------------- */

import Needle from '@build/needle.pkg';
const needle = new Needle(data);

/** ----------------------------------------
     Test hasDeep()
 ---------------------------------------- */

describe('Using hasDeep() method for nested key match', () => {
    test('It should display item: Sander', () => {
        const input = data;

        const output = [
            {
                active: true,
                created: '2/12/2020',
                name: 'Sander',
                age: 30,
                city: 'Amsterdam',
                score: 88,
                categories: [
                    'development',
                    'ux'
                ],
                contact: {
                    mail: 'sander@example.com',
                    phone: {
                        mobile: '06-12345678'
                    }
                }
            }
        ];

        const query = needle
            .hasDeep('mobile')
            .take();

        expect(query).toEqual(output);
    });
});
