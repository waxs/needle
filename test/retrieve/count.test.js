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
    Test count()
 ---------------------------------------- */

describe('Using count() method for counting results', () => {
    test('It should display: 3', () => {
        const input = data;

        const query = needle
            .count();

        expect(query).toEqual(3);
    });
});