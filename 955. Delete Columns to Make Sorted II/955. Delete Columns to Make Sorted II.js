/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function (A) {
    let deletionCount = 0;

    if (A.length > 1) {
        for (let i = 1; i < A.length; ++i) {
            let deletion = compareByDeletion(A[i - 1], A[i]);
            for (let d = 0; d < deletion.length; ++d) {
                deleteCharAt(A, deletion[d] - d);
                deletionCount++;                
                i=0;
            }

            if(A[0].length == 0)
                break;
        }
    }

    return deletionCount;
};

function compareByDeletion(A1, A2) {
    let deletion = [];
    for (let i = 0; i < A1.length; ++i) {
        if (A1[i] > A2[i]) {
            deletion.push(i);
        }
        else if (A1[i] < A2[i]) {
            break;
        }
    }

    return deletion;
}

function deleteCharAt(A, column) {
    for (let i = 0; i < A.length; i++) {
        A[i] = A[i].substring(0, column) + A[i].substring(column + 1);
    }

    return A;
}

console.assert(minDeletionSize(["ca"]) == 0, { number: 1 });
console.assert(minDeletionSize(["ca", "bb", "ac"]) == 1, { number: 2 });
console.assert(minDeletionSize(["xc", "yb", "za"]) == 0, { number: 3 });
console.assert(minDeletionSize(["zyx", "wvu", "tsr"]) == 3, { number: 4 });
console.assert(minDeletionSize(["xga", "xfb", "yfa"]) == 1, { number: 5 });
console.assert(minDeletionSize(["cxga", "bxfb", "ayfa"]) == 2, { number: 5 });
console.assert(minDeletionSize(["doeeqiy","yabhbqe","twckqte"]) == 3, { number: 6 });
console.log("END");