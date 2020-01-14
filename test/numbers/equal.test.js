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
     Test equal()
 ---------------------------------------- */

describe('Using equal() method for exact number match', () => {
    test('It should display item: Sander', () => {
        const input = data;

        const output = [
            {
                name: 'Sander',
                age: 30
            }
        ];

        const query = needle
            .equal('age', 30)
            .select('name', 'age')
            .take();

        expect(query).toEqual(output);
    });
});

describe('Using equal() method for exact value match', () => {
    test('It should display item: Nicole', () => {
        const input = data;

        const output = [
            {
                name: 'Nicole',
                age: 32
            }
        ];

        const query = needle
            .equal('name', 'Nicole')
            .select('name', 'age')
            .take();

        expect(query).toEqual(output);
    });
});
