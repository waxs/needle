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
     Test values()
 ---------------------------------------- */

describe('Using values() method to retrieve all values', () => {
    test('It should display items: Sander, Nicole and John', () => {
        const input = data;

        const output = ['Sander', 'Nicole', 'John'];

        const query = needle
            .values('name');

        expect(query).toEqual(output);
    });
});