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

describe('Using bigger() method for number match', () => {
    test('It should display item: John', () => {
        const input = data;

        const output = [
            {
                name: 'John',
                age: 45
            }
        ];

        const query = needle
            .bigger('age', 40)
            .select('name', 'age')
            .take();

        expect(query).toEqual(output);
    });
});
