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
     Test sum()
 ---------------------------------------- */

describe('Using sum() method for sum of values', () => {
    test('It should display item: 107', () => {
        const input = data;

        const query = needle
            .sum('age')

        expect(query).toEqual(107);
    });
});