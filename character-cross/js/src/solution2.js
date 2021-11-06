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
        const reverseIndex = word.length - 1 - i;
        const char = word[i];
        const reverseChar = word[reverseIndex];

        const charsDistance = Math.abs(i - reverseIndex);

        if (i < reverseIndex) {
            // The top of the cross
            const spacesBetweenChars = ' '.repeat(charsDistance * 2 - 1);
            const spacesBeforeChar = ' '.repeat(i * 2);
            const spacesAfterChar = ' '.repeat((word.length - 1 - reverseIndex) * 2);
            lines.push(spacesBeforeChar
                + char
                + spacesBetweenChars
                + reverseChar
                + spacesAfterChar);
        } else if (i === reverseIndex) {
            // The middle of the cross
            const spacesBeforeChar = ' '.repeat(Math.floor(word.length / 2) * 2);
            const spacesAfterChar = spacesBeforeChar;
            lines.push(spacesBeforeChar + char + spacesAfterChar);
        } else {
            // The bottom of the cross
            const spacesBetweenChars = ' '.repeat(charsDistance * 2 - 1);
            const spacesBeforeChar = ' '.repeat(reverseIndex * 2);
            const spacesAfterChar = ' '.repeat((word.length - 1 - i) * 2);
            lines.push(spacesBeforeChar
                + reverseChar
                + spacesBetweenChars
                + char
                + spacesAfterChar);
        }
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