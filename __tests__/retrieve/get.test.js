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
    Test get()
 ---------------------------------------- */

describe('Using get() method for retrieving instance', () => {
    test('It should display item: Needle', () => {
        const query = needle
            .get();

        expect(query).toBeInstanceOf(Needle);
    });
});