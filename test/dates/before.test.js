/** ----------------------------------------
    Mockup Data
 ---------------------------------------- */

import { data } from '@mock/advanced';

/** ----------------------------------------
     Needle
 ---------------------------------------- */

import Needle from '@build/needle.min';
const needle = new Needle(data);

/** ----------------------------------------
     Test before()
 ---------------------------------------- */

describe('Using before() method for date match', () => {
    test('It should display item: Nicole', () => {
        const input = data;

        const output = [
            {
                name: 'Nicole',
                age: 32,
                city: 'Paris'
            }
        ];

        const query = needle
            .before('created', '1/1/2018')
            .select('name', 'age', 'city')
            .take();

        expect(query).toEqual(output);
    });
});
