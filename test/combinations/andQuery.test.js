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
    Test orQuery()
 ---------------------------------------- */

describe('Using andQuery() method for selecting items', () => {
    test('It should display 1 item', () => {
        const input = data;

        const output = [
            {
                name: 'Nicole',
                age: 32
            }
        ];

        const query = needle
            .andQuery(query => [
                query.find('name', 'Nicole'),
                query.bigger('age', 30)
            ])
            .select('name', 'age')
            .take();

        expect(query).toEqual(output);
    });
});