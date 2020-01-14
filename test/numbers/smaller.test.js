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
     Test smaller()
 ---------------------------------------- */

describe('Using smaller() method for number match', () => {
    test('It should display items: Sander and Nicole', () => {
        const input = data;

        const output = [
            {
                name: 'Sander',
                age: 30
            },
            {
                name: 'Nicole',
                age: 32
            }
        ];

        const query = needle
            .smaller('age', 35)
            .select('name', 'age')
            .take();

        expect(query).toEqual(output);
    });
});
