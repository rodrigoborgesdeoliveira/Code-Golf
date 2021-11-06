const { describe, it } = require('mocha');
const assert = require('assert');
const solution1 = require('../src/solution1');
const solution2 = require('../src/solution2');

describe('Solution 1', () => {
    it('should throw an error if no word is provided', () => {
        assert.throws(solution1.draw, /No word provided.$/);
    });

    it('should throw an error if the word contains an even number of letters', () => {
        assert.throws(() => solution1.draw('TEST'), /The word contains an even number of letters.$/);
    });

    it('should return the correct lines for the word "PROGRAM"', () => {
        const output = solution1.buildLines('PROGRAM');
        const expectedOutput = [
            'P           M',
            '  R       A  ',
            '    O   R    ',
            '      G      ',
            '    O   R    ',
            '  R       A  ',
            'P           M',
        ];

        assert.deepEqual(output, expectedOutput);
    });

    it('should return the correct lines for the word "CODE GOLF"', () => {
        const output = solution1.buildLines('CODE GOLF');
        const expectedOutput = [
            'C               F',
            '  O           L  ',
            '    D       O    ',
            '      E   G      ',
            '                 ',
            '      E   G      ',
            '    D       O    ',
            '  O           L  ',
            'C               F',
        ];

        assert.deepEqual(output, expectedOutput);
    });
});

describe('Solution 2', () => {
    it('should throw an error if no word is provided', () => {
        assert.throws(solution2.draw, /No word provided.$/);
    });

    it('should throw an error if the word contains an even number of letters', () => {
        assert.throws(() => solution2.draw('TEST'), /The word contains an even number of letters.$/);
    });

    it('should return the correct lines for the word "PROGRAM"', () => {
        const output = solution2.buildLines('PROGRAM');
        const expectedOutput = [
            'P           M',
            '  R       A  ',
            '    O   R    ',
            '      G      ',
            '    O   R    ',
            '  R       A  ',
            'P           M',
        ];

        assert.deepEqual(output, expectedOutput);
    });

    it('should return the correct lines for the word "CODE GOLF"', () => {
        const output = solution2.buildLines('CODE GOLF');
        const expectedOutput = [
            'C               F',
            '  O           L  ',
            '    D       O    ',
            '      E   G      ',
            '                 ',
            '      E   G      ',
            '    D       O    ',
            '  O           L  ',
            'C               F',
        ];

        assert.deepEqual(output, expectedOutput);
    });
});