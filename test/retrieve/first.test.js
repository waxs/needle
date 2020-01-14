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
    Test first()
 ---------------------------------------- */

describe('Using first() method for selecting first item', () => {
    test('It should display item: Sander', () => {
        const input = data;

        const output = [
            {
                active: true,
                created: '12/2/2020',
                name: 'Sander',
                age: 30,
                city: 'Amsterdam'
            }
        ];

        const query = needle
            .first()
            .select('active', 'created', 'name', 'age', 'city')
            .take();

        expect(query).toEqual(output);
    });
});