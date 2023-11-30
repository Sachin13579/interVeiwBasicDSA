/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let map={}
    // let count=1/
    for(let i=0;i<nums.length;i++){
        if(!map[nums[i]]){
            map[nums[i]]=1
        }else{
            // console.log(map[nums[i]],nums[i],"map[nums[i]]")
            if(map[nums[i]]<2){
                console.log(map,"i ma map")
            console.log(map[nums[i]],true)

            map[nums[i]]+=1;
            }else{
            console.log(map[nums[i]],nums[i],"map")
                nums.splice(i,1)
                i--
            }
        }
    }
    console.log(nums)
};
removeDuplicates([1,1,1])