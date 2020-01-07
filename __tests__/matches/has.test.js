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
     Test has()
 ---------------------------------------- */

describe('Using has() method for first layer key match', () => {
    test('It should display item: Nicole', () => {
        const input = data;

        const output = [
            {
                active: false,
                created: '10/1/2017',
                name: 'Nicole',
                age: 32,
                city: 'Paris',
                score: 66,
                categories: [
                    'design',
                    'ux'
                ],
                items: [1, 2, 3],
                contact: {
                    mail: 'nicole@example.com'
                }
            }
        ];

        const query = needle
            .has('items')
            .take();

        expect(query).toEqual(output);
    });
});
