function analyzeArray(arr) {
    if (arr.length === 0) {
        return { average: NaN, min: NaN, max: NaN, length: 0 };
    }

    const sum = arr.reduce((acc, num) => acc + num, 0);
    const average = sum / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;

    return { average, min, max, length}
}

module.exports = { analyzeArray }