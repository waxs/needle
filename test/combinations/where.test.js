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
     Test where()
 ---------------------------------------- */

describe('Using where() for key, value matching: "="', () => {
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
            .where('name', '=', 'Sander')
            .select('name', 'age', 'city')
            .take();

        expect(query).toEqual(output);
    });
});
