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
     Test between()
 ---------------------------------------- */

describe('Using between() method for number range match', () => {
    test('It should display item: Sander and Nicole', () => {
        const input = data;

        const output = [
            {
                name: 'Sander',
                age: 30,
                city: 'Amsterdam',
                score: 88
            },
            {
                name: 'Nicole',
                age: 32,
                city: 'Paris',
                score: 66
            }
        ];

        const query = needle
            .between('age', [30, 40])
            .select('name', 'age', 'city', 'score')
            .take();

        expect(query).toEqual(output);
    });
});
