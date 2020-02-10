/** ----------------------------------------
    Utility
 ---------------------------------------- */

import arrange from '@util/_arrange';

/** ----------------------------------------
     Test asc arrange()
 ---------------------------------------- */

describe('Using arrange() utility for sorting items', () => {
    test('It should sort the array on numbers asc', () => {
        const input = [
            {
                index: 1
            },
            {
                index: 3
            },
            {
                index: 2
            }
        ];

        const output = [
            {
                index: 1
            },
            {
                index: 2
            },
            {
                index: 3
            }
        ];

        const util = arrange(input, 'index', 'asc');

        expect(util).toEqual(output);
    });
});

/** ----------------------------------------
    Test desc arrange()
 ---------------------------------------- */

describe('Using arrange() utility for sorting items', () => {
    test('It should sort the array on numbers desc', () => {
        const input = [
            {
                index: 1
            },
            {
                index: 3
            },
            {
                index: 2
            }
        ];

        const output = [
            {
                index: 3
            },
            {
                index: 2
            },
            {
                index: 1
            }
        ];

        const util = arrange(input, 'index', 'desc');

        expect(util).toEqual(output);
    });
});

/** ----------------------------------------
    Test asc arrange() on Date
 ---------------------------------------- */

describe('Using arrange() utility for sorting date values', () => {
    test('It should sort the array on dates asc', () => {
        const input = [
            {
                index: '2/12/2020'
            },
            {
                index: '12/7/2018'
            },
            {
                index: '11/14/2019'
            }
        ];

        const output = [
            {
                index: '12/7/2018'
            },
            {
                index: '11/14/2019'
            },
            {
                index: '2/12/2020'
            }
        ];

        const util = arrange(input, 'index', 'asc');

        expect(util).toEqual(output);
    });
});