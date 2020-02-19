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
     Test sort()
 ---------------------------------------- */

describe('Using sort() method for sorting numbers', () => {
    test('It should display items sorted on age', () => {
        const input = data;

        const output = [
            {
                name: 'Sander',
                age: 30
            },
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
            .sort('age')
            .select('name', 'age')
            .take();

        expect(query).toEqual(output);
    });
});

describe('Using sort() method for sorting strings', () => {
    test('It should display items sorted on name', () => {
        const input = data;

        const output = [
            {
                name: 'John',
                age: 45
            },
            {
                name: 'Nicole',
                age: 32
            },
            {
                name: 'Sander',
                age: 30
            }
        ];

        const query = needle
            .sort('name')
            .select('name', 'age')
            .take();

        expect(query).toEqual(output);
    });
});

describe('Using sort() method for sorting dates', () => {
    test('It should display items sorted on created', () => {
        const input = data;

        const output = [
            {
                name: 'Nicole',
                age: 32
            },
            {
                name: 'John',
                age: 45
            },
            {
                name: 'Sander',
                age: 30
            }
        ];

        const query = needle
            .sort('created')
            .select('name', 'age')
            .take();

        expect(query).toEqual(output);
    });
});