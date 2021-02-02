/**
 * @param {number} n  ,  1 <= n <= 9
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let results = [];

    let answers = generate(n);

    for (let i = 0; i < answers.length; i++) {
        let answer = answers[i];
        if (evaluate(answer)) {
            results.push(answer);
        }
    }

    let converted = convertAnswer(results);
    return converted;
};

String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function evaluate(answer) {
    let n = answer.length;
    for (let g = 0; g < n; g++) {
        for (let i = g + 1; i < n; i++) {
            if (answer[g] == answer[i]) // check no conflict in this row
                return false;

            let dist = i - g;
            if (parseInt(answer[g]) + dist == parseInt(answer[i]) ||
                parseInt(answer[g]) - dist == parseInt(answer[i])) // check no conflict in diameter
                return false;
        };
    };

    return true;
}

function generate(n) {
    let count = Math.pow(n, n);
    let answers = [];
    for (let i = 0; i < count; i++) {
        let nBaseNumeric = n > 1 ? i.toString(n) : "0";
        let repeatCount = n - nBaseNumeric.length;
        let padding = "0".repeat(repeatCount);
        nBaseNumeric = padding + nBaseNumeric; // Padding
        let resultArray = nBaseNumeric.split('');
        answers.push(resultArray);
    }

    return answers;
}

function convertAnswer(answers) {
    let result = [];
    for (let i = 0; i < answers.length; i++) {
        let answer = answers[i];
        let stringAnswer = [];
        for (let j = 0; j < answer.length; j++) {
            let row = ".".repeat(answer.length);
            row = row.replaceAt(parseInt(answer[j]), 'Q');
            stringAnswer.push(row);
        }
        result.push(stringAnswer);
    }

    return result;
}



var isArrayEqual = function (array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] != array2[i]) {
            return false;
        }
    }

    return true;
}

var isArray2DEqual = function (array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        if (isArrayEqual(array1[i], array2[i]) == false) {
            return false;
        }
    }

    return true;
}

console.assert(isArray2DEqual(solveNQueens(1), [["Q"]], { number: 1, errorMsg: "N=1" }));
console.assert(isArray2DEqual(solveNQueens(4), [[".Q..", "...Q", "Q...", "..Q."], ["..Q.", "Q...", "...Q", ".Q.."]]), { number: 2, errorMsg: "N=4" });

console.log("END")

