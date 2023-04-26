// problem:-find the secondlargest element in the array.


// // inbuilt function approach
// function secondlargest(arr){
//     // lets sprt the array
//     arr.sort((a,b)=>a-b)
//     // handling the edge case of duplicate Element value in same array
//     let uniqueArray=[...new Set(arr)]
   
//     console.log(uniqueArray[uniqueArray.length-2]);
    

// }
// secondlargest([1,2,3,4,5,45,78,78,23])


// optimized solution without inbuiltFunction

function secondlargest(arr){
    let largest= Number.NEGATIVE_INFINITY
    let secondLargest=Number.NEGATIVE_INFINITY
    for(let i=0;i<arr.length;i++){
            if(arr[i]>largest){
                secondLargest=largest
                largest=arr[i]
            }else if(arr[i]!=largest&&secondLargest<arr[i]){
                secondLargest=arr[i]
            }
    }
    console.log(secondLargest)
}
secondlargest([1,2,3,4,5,45,69,78,78,23])