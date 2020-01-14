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
    Test last()
 ---------------------------------------- */

describe('Using last() method for selecting last item', () => {
    test('It should display item: John', () => {
        const input = data;

        const output = [
            {
                name: 'John',
                age: 45,
                city: 'New York'
            }
        ];

        const query = needle
            .last()
            .select('name', 'age', 'city')
            .take();

        expect(query).toEqual(output);
    });
});