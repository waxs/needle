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
     Test month()
 ---------------------------------------- */

describe('Using month() method for date match', () => {
    test('It should display item: Sander', () => {
        const input = data;

        const output = [
            {
                name: 'Sander',
                age: 30
            }
        ];

        const query = needle
            .month('created', 'feb', 2020)
            .select('name', 'age')
            .take();

        expect(query).toEqual(output);
    });
});
