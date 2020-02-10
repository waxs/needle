/** ----------------------------------------
     Utility
 ---------------------------------------- */

import evaluate from '@util/_evaluate';

/** ----------------------------------------
     Test evaluate()
 ---------------------------------------- */

describe('Using evaluate for testing an equal to', () => {
    test('It should return true', () => {
        const util = evaluate('Sander', '=', 'Sander');
        expect(util).toEqual(true);
    });
});

describe('Using evaluate for testing an not equal to', () => {
    test('It should return true', () => {
        const util = evaluate('Peter', '!=', 'Sander');
        expect(util).toEqual(true);
    });
});

describe('Using evaluate for testing an is larger then', () => {
    test('It should return true', () => {
        const util = evaluate(30, '>', 20);
        expect(util).toEqual(true);
    });
});

describe('Using evaluate for testing an is larger then or equal', () => {
    test('It should return true', () => {
        const util = evaluate(30, '>=', 30);
        expect(util).toEqual(true);
    });
});

describe('Using evaluate for testing an is smaller then', () => {
    test('It should return true', () => {
        const util = evaluate(30, '<', 55);
        expect(util).toEqual(true);
    });
});

describe('Using evaluate for testing an is smaller then or equal', () => {
    test('It should return true', () => {
        const util = evaluate(30, '<=', 30);
        expect(util).toEqual(true);
    });
});