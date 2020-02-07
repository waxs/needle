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
    Test create()
 ---------------------------------------- */

describe('Using create() method to add new item', () => {
    test('It should display all names', () => {
        const input = data;

        const output = ['Sander', 'Nicole', 'John', 'Peter'];

        needle.create({
            name: 'Peter',
            age: 44
        });

        const query = needle
            .values('name')

        expect(query).toEqual(output);
    });
});
