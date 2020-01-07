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
     Test Find
 ---------------------------------------- */

describe('Using has() method for first layer key match', () => {
    test('It should display item: Nicole', () => {
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
