/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let largWord = word1.length >= word2.length ? word1 : word2;
    let smallWord = word1.length >= word2.length ? word2 : word1;
    let distance = 0;
    for (let i = 0; i < smallWord.length; i++) {
        for (let j = 0; j < largWord.length; j++) {
            
        }
    }
    return distance;
};

function insert(word, index, char) {
    return word.slice(0, index) + char + word.slice(index);
}

function replace(word, index, char) {
    return word.slice(0, index) + char + word.slice(index + 1);
}

function remove(word, index) {
    return word.slice(0, index) + word.slice(index + 1);
}


console.assert(minDistance("horse", "ros") == 3, "1");
console.assert(minDistance("intention", "execution") == 5, "2");
console.assert(minDistance("tour", "ruot") == 4, "3");