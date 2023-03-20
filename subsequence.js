function subsequence(array, sequence) {
    let sequenceId = 0
    for (const n of array) {
        if (n === sequence[sequenceId]) {
            sequenceId++
        }
        if (sequenceId === sequence.length) {
            return true
        }
    }
    return false
}

module.exports = subsequence