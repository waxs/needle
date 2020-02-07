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
    Test average()
 ---------------------------------------- */

describe('Using max() method for highest value match', () => {
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
            .average('age')
            .select('name', 'age', 'city')
            .take();

        expect(query).toEqual(output);
    });
});