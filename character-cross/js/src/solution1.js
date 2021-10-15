/**
 * Draws the cross pattern.
 * 
 * @param {string} word The word used to draw the pattern.
 */
function draw(word) {
    if (!word) {
        throw new Error('No word provided.');
    }

    if (word.length % 2 === 0) {
        throw new Error('The word contains an even number of letters.');
    }

    const lines = buildLines(word);
    print(lines);
}

/**
 * Handles the word and builds the array of lines.
 * 
 * @param {string} word The word used to build the cross pattern output.
 * 
 * @returns Array of lines.
 */
function buildLines(word) {
    const lines = [];

    for (let i = 0; i < word.length; i++) {
        const reverseWordIndex = word.length - 1 - i;

        // Build line
        const lineCharacters = [];
        for (let j = 0; j < word.length; j++) {
            const character = j === i || j === reverseWordIndex ?
                word[j] : ' ';
            
            lineCharacters.push(character);
        }

        lines.push(lineCharacters.join(' '));
    }

    return lines;
}

/**
 * Prints the lines.
 * 
 * @param {Array<string>} lines The lines to print.
 */
function print(lines) {
    lines.forEach(line => console.log(line));
}

// Export functions to use on unit tests
module.exports.draw = draw;
module.exports.buildLines = buildLines;