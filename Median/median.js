const input = [8, 7, 7, 9, 5, 4, 2, 9];
function result(input) {
    const sorted = input.slice().sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[mid - 1] + sorted[mid]) / 2;
    }

    return sorted[mid];
}
console.log(result(input));
