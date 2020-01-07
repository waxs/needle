/** ----------------------------------------
    Mockup Data
 ---------------------------------------- */

import { data } from '@mock/advanced';

/** ----------------------------------------
     Needle
 ---------------------------------------- */

import Needle from '@js/Needle';
const needle = new Needle(data);

/** ----------------------------------------
     Test Find
 ---------------------------------------- */

describe('Using findDeep() method for nested key match', () => {
    test('It should display item: Sander', () => {
        const input = data;

        const output = [
            {
                active: true,
                created: '12/2/2020',
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
            .findDeep('mail', 'sander@example.com')
            .take();

        expect(query).toEqual(output);
    });
});
