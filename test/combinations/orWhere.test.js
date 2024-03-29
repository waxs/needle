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
    Test orWhere()
 ---------------------------------------- */

describe('Using orWhere() for exception on where()', () => {
    test('It should display item: Sander', () => {
        const input = data;

        const output = [
            {
                name: 'Sander',
                age: 30,
                city: 'Amsterdam'
            },
            {
                name: 'John',
                age: 45,
                city: 'New York'
            }
        ];

        const query = needle
            .where('name', '=', 'Sander')
            .orWhere('name', '=', 'John')
            .select('name', 'age', 'city')
            .take();

        expect(query).toEqual(output);
    });
});
