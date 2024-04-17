/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//     let map={}
//     // let count=1/
//     for(let i=0;i<nums.length;i++){
//         if(!map[nums[i]]){
//             map[nums[i]]=1
//         }else{
//             // console.log(map[nums[i]],nums[i],"map[nums[i]]")
//             if(map[nums[i]]<2){
//                 console.log(map,"i ma map")
//             console.log(map[nums[i]],true)

//             map[nums[i]]+=1;
//             }else{
//             console.log(map[nums[i]],nums[i],"map")
//                 nums.splice(i,1)
//                 i--
//             }
//         }
//     }
//     console.log(nums)
// };
// removeDuplicates([1,1,1])

var removeDuplicates = function (nums) {

    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i], nums[i + 1]);
        if (nums[i] == nums[i + 1]) {

            nums.splice(i + 1, 1);
            i--
        }
        // i++
        // console.log(nums[i])
    }
    console.log(nums)
};
removeDuplicates([-1, 0, 0, 0, 0, 3, 3])
// removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])

// 2024-04-17T19:40:30.863Z 1st attempt

console.log(new Date())