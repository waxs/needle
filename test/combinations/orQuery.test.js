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

describe('Using orQuery() method for selecting items', () => {
    test('It should display 2 items', () => {
        const input = data;

        const output = [
            {
                name: 'Nicole',
                age: 32
            },
            {
                name: 'John',
                age: 45
            }
        ];

        const query = needle
            .orQuery(query => [
                query.find('name', 'Nicole'),
                query.bigger('age', 40)
            ])
            .select('name', 'age')
            .take();

        expect(query).toEqual(output);
    });
});