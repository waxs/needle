/** ----------------------------------------
    Mockup Data
 ---------------------------------------- */

import { data } from '@mock/advanced';

/** ----------------------------------------
     Needle
 ---------------------------------------- */

import Needle from '@js/Needle';
const needle = new Needle(data);

/** ----------------------------------------
     Test is()
 ---------------------------------------- */

describe('Using is() method for bool key match', () => {
    test('It should display items: Sander and John', () => {
        const input = data;

        const output = [
            {
                name: 'Sander',
                age: 30
            },
            {
                name: 'John',
                age: 45
            }
        ];

        const query = needle
            .is('active')
            .select('name', 'age')
            .take();

        expect(query).toEqual(output);
    });
});
