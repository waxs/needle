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
     Test min()
 ---------------------------------------- */

describe('Using min() method for lowest value match', () => {
    test('It should display item: Sander', () => {
        const input = data;

        const output = [
            {
                name: 'Sander',
                age: 30,
                city: 'Amsterdam'
            }
        ];

        const query = needle
            .min('age')
            .select('name', 'age', 'city')
            .take();

        expect(query).toEqual(output);
    });
});