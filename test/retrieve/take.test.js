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
     Test take()
 ---------------------------------------- */

describe('Using take() method for all items', () => {
    test('It should display items: Sander, Nicole and John', () => {
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
            .select('name', 'age')
            .take();

        expect(query).toEqual(output);
    });
});

describe('Using take() method for 1 item', () => {
    test('It should display item: Sander', () => {
        const input = data;

        const output = [
            {
                name: 'Sander',
                age: 30
            }
        ];

        const query = needle
            .select('name', 'age')
            .take(1);

        expect(query).toEqual(output);
    });
});

describe('Using take() method with overflow', () => {
    test('It should display item: Sander', () => {
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
            .select('name', 'age')
            .take(10);
    
        expect(query).toEqual(output);
    });
});
