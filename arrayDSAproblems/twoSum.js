// Given an unsorted array of integers find a pair with given sum in it.

/**
 * APPROACH=======>>
 * First we will go with the brute-force algorithm of this problem.
 * we will use two nested loops to find the sum of two elemets which are equal to target sum

*/

//Input
const nums = [12, 7, 2, 8, 0, 3];
const targetSum = 10;

function findTargetSumBruteForce(nums, targetSum) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === targetSum) {
                return [nums[i], nums[j]];
            }
        }
    }
    return [-1, -1];
}
console.log(findTargetSumBruteForce(nums, targetSum,))


/**
 * APPROACH=======>>
 * Now we will go with the optimized algorithm of this problem.
 * we will go with single loop approach with hash map approach;
 */

const findTargetSum = (nums, targetSum) => {
    const map = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(Math.abs(nums[i] - targetSum))) {

            return [Math.abs(nums[i] - targetSum), nums[i]];
        }
        map.add(nums[i])
    }
}
console.log(findTargetSum(nums, targetSum))