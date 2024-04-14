const arr = [1, 2, 3, 4, 5, 6, 6, 7, 7,];
console.log(findFirstDup(arr, arr.length));
function findFirstDup(arr, n) {

    for (let i = 0; i < n; i++) {
        let index = Math.abs(arr[i]) - 1;
        if (arr[index] < 0) {
            return arr[i]
        }
        arr[index] = -arr[index];
    }
}
