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
     Test after()
 ---------------------------------------- */

describe('Using after() method for date match', () => {
    test('It should display item: Sander', () => {
        const input = data;

        const output = [
            {
                name: 'Sander',
                age: 30,
                city: 'Amsterdam'
            }
        ];

        const query = needle
            .after('created', '1/1/2020')
            .select('name', 'age', 'city')
            .take();

        expect(query).toEqual(output);
    });
});
