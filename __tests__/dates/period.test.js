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
     Test period()
 ---------------------------------------- */

describe('Using before() method for date range match', () => {
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
            .period('created', ['1/1/2020', '1/1/2021'])
            .select('name', 'age', 'city')
            .take();

        expect(query).toEqual(output);
    });
});
