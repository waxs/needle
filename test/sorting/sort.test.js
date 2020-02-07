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
     Test sort()
 ---------------------------------------- */

describe('Using sort() method for sorting items', () => {
    test('It should display sorted array', () => {
        const input = data;

        const output = [
            {
                name: 'Sander',
                age: 30
            },
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
            .sort('age')
            .select('name', 'age')
            .take();

        expect(query).toEqual(output);
    });
});
