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
     Test index()
 ---------------------------------------- */

describe('Using index() method for selecting single item', () => {
    test('It should display item: Nicole', () => {
        const input = data;

        const output = [
            {
                name: 'Sander',
                age: 30,
                mail: 'sander@example.com'
            },
            {
                name: 'Nicole',
                age: 32,
                mail: 'nicole@example.com'
            },
            {
                name: 'John',
                age: 45,
                mail: 'john@example.com'
            }
        ];

        const query = needle
            .select('name', 'age', 'contact.mail')
            .take();

        expect(query).toEqual(output);
    });
});