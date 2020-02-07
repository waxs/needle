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
    Test remove()
 ---------------------------------------- */

describe('Using remove() to delete a single item', () => {
    test('It should remove item: Sander', () => {
        const input = data;

        const output = [
            {
                name: 'Nicole',
                age: 32
            },
            {
                name: 'John',
                age: 45
            }
        ];

        const query = needle
            .select('name', 'age')
            .remove(0)
            .take();

        expect(query).toEqual(output);
    });
});
