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
    Test read()
 ---------------------------------------- */

describe('Using read() to retrieve a single item', () => {
    test('It should display item: Sander', () => {
        const input = data;

        const output = [{
            name: 'Sander',
            age: 30
        }];

        const query = needle
            .read(0)
            .select('name', 'age')
            .take();

        expect(query).toEqual(output);
    });
});
