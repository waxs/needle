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
     Test find()
 ---------------------------------------- */

describe('Using find() method for first layer key match', () => {
    test('It should display item: Sander', () => {
        const input = data;

        const output = [
            {
                active: true,
                created: '2/12/2020',
                name: 'Sander',
                age: 30,
                city: 'Amsterdam',
                score: 88,
                categories: [
                    'development',
                    'ux'
                ],
                contact: {
                    mail: 'sander@example.com',
                    phone: {
                        mobile: '06-12345678'
                    }
                }
            }
        ];

        const query = needle
            .find('name', 'Sander')
            .take();

        expect(query).toEqual(output);
    });
});

describe('Using find() method for value in array match', () => {
    test('It should display item: Sander', () => {
        const input = data;

        const output = [
            {
                active: true,
                name: 'Sander',
                categories: [
                    'development',
                    'ux'
                ]
            }
        ];

        const query = needle
            .select('active', 'name', 'categories')
            .find('categories', 'development')
            .take();

        expect(query).toEqual(output);
    });
});

describe('Using find() method for multiple value in array match', () => {
    test('It should display item: Sander and Nicole', () => {
        const input = data;

        const output = [
            {
                name: 'Sander',
                categories: [
                    'development',
                    'ux'
                ]
            },
            {
                name: 'Nicole',
                categories: [
                    'design',
                    'ux'
                ]
            }
        ];

        const query = needle
            .select('name', 'categories')
            .find('categories', ['design', 'development'])
            .take();

        expect(query).toEqual(output);
    });
});

describe('Using find() method for active key matching', () => {
    test('It should display item: Sander and John', () => {
        const input = data;

        const output = [
            {
                active: true,
                name: 'Sander'
            },
            {
                active: true,
                name: 'John'
            }
        ];

        const query = needle
            .select('active', 'name')
            .find('active', true)
            .take();

        expect(query).toEqual(output);
    });
});