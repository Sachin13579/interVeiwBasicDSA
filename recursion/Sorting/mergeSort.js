function mergeTwoSortedArray(left, right) {

    let sortedArray = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArray.push(left.shift());
        } else {
            sortedArray.push(right.shift());
        }
    }
    return [...sortedArray, ...left, ...right];

}

function mergeSort(arr) {

    if (arr.length <= 1) {
        return arr
    }

    let mid = arr.length / 2
    // console.log(mid);
    // let mid = 0 + (arr.length - 0) / 2

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return mergeTwoSortedArray(left, right)


}
console.log(mergeSort([1, 3, 4, 8,5, 67, 6, 7]));