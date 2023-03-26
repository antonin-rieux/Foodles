function test(sentence, n) {
    validateInputs(sentence, n);
    const tmp = {};

    const splitedSentence = sentence.split(' ');
    for (const word of splitedSentence) {
        if (tmp[word]) {
            ++tmp[word];
        } else {
            tmp[word] = 1;
        }
    }
    
    let results = Object.entries(tmp);
    results.sort((word, word2) => {
        if (word[1] !== word2[1]) {
            return word2[1] - word[1];
        }
        return word[0] > word2[0] ? 1 : -1;
    })
    return results.slice(0, n);
}

function validateInputs(sentence, n) {
    if (typeof sentence !== 'string' || sentence.length === 0) {
        throw new Error('Invalid first argument');
    }
    if (typeof n !== 'number' || n < 0) {
        throw new Error('Invalid second argument');
    }
}

console.log(test("baz bar foo foo zblah zblah zblah baz toto bar", 3));

export default test;