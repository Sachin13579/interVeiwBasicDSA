//find the subArryay count with sum K.


/**
 * APPROACH:BRUTE - FORCE METHOD
 * 
 * STEPS:
 * 1st we will run two nested loops and try to find all the subArrays 
 * 2nd here we will take prefixx sum vatiable find the sum of all the subArrays ,
 * 3rd we will run the check sum of the which subArrays is eaqual to k then we will return the count.
 * 
 */

function subArraysWithSumK(arr, k) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let prfixSum = 0;
        let subArrays = [];
        for (let j = i; j < arr.length; j++) {
            prfixSum += arr[j];
            subArrays.push(arr[j]);
            if (prfixSum === k) {
                console.log(subArrays)
                count++
            }
        }
    }
    return count;

}

/**
 * APPROACH:OPTIMIZED SOLUTION WITH HASH-MAP
 * STEPS:
 * we will take prefixx sum and count of the subArryas = 0
 * we take a hash map for saving the prefix sum and its occurrences
 * 1st step after taking all this varibales and map we will run loop over the arr
 * 2nd we will find the prefix sum
 * 3rd after taking prefix sum we will increment the count by checking of the diff ofprefix sum and k exist in map
 * 4th we will set the prefix sum value in map with its intial occurence 0 and then if its exist then we will increase the occurence.
 * 5th for handlin one edge case in which 1st subarray is having sum equal to desired sum for that we will set sum 0 occurence in map with count 1,
 * we are done.
 
*/

const subArraysWithSunKOptimizedFunc = (arr, k) => {
    let map = new Map();
    let count = 0;
    let prfixSum = 0; ``

    map.set(0, 1);
    for (let i = 0; i < arr.length; i++) {

        prfixSum += arr[i];
        count += map.get(prfixSum - k) || 0;

        map.set(prfixSum, (map.get(prfixSum) || 0) + 1)

    }

    return count;
}
const arr = [1, 8, 1, 9, 0, 7, 2];
const k = 9;
console.log(subArraysWithSumK(arr, k));
console.log(subArraysWithSunKOptimizedFunc(arr, k));
