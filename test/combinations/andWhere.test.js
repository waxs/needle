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
    Test andWhere()
 ---------------------------------------- */

describe('Using andWhere() for exception on where()', () => {
    test('It should display item: Sander', () => {
        const input = data;

        const output = [
            {
                name: 'John',
                age: 45,
                city: 'New York'
            }
        ];

        const query = needle
            .where('age', '>', 30)
                .andWhere('name', '=', 'John')
            .select('name', 'age', 'city')
            .take();

        expect(query).toEqual(output);
    });
});
