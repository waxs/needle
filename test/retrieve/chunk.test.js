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
     Test chunk()
 ---------------------------------------- */

describe('Using chunk() method for retrieving chunks', () => {
    test('It should display chunks', () => {
        const input = data;

        const output = [
            [
                {
                    name: 'Sander',
                    age: 30
                },
                {
                    name: 'Nicole',
                    age: 32
                }
            ],
            [
                {
                    name: 'John',
                    age: 45
                }
            ]
        ];

        const chunks = needle
            .select('name', 'age')
            .chunk(2);

        expect(chunks.chunks).toEqual(output);
    });
});

describe('Using chunk() method for chunk size', () => {
    test('It should display: 2', () => {
        const input = data;

        const chunks = needle
            .chunk(2);

        expect(chunks.size).toEqual(2);
    });
});

describe('Using chunk() method for chunk amount', () => {
    test('It should display: 2', () => {
        const input = data;

        const chunks = needle
            .chunk(2);

        expect(chunks.size).toEqual(2);
    });
});

describe('Using chunk() method for next chunk', () => {
    test('It should display item: John', () => {
        const input = data;

        const output = [
            {
                name: 'John',
                age: 45
            }
        ];

        const chunks = needle
            .chunk(2);

        const next = chunks
            .next()
            .select('name', 'age')
            .take();

        expect(next).toEqual(output);
    });
});

describe('Using chunk() method for prev chunk', () => {
    test('It should display item: John', () => {
        const input = data;

        const output = [
            {
                name: 'John',
                age: 45
            }
        ];

        const prev = needle
            .chunk(2)
            .prev()
            .select('name', 'age')
            .take();

        expect(prev).toEqual(output);
    });
});