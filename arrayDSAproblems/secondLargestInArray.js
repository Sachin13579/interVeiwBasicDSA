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

// Brut force 
// function secondLargest(arr,n){
//   let i=0;
//   let j=0
//   let max=arr[0];
//   let sec=-1
//   while(i<n){

//     if(arr[i]>max){
//       max=arr[i]
//     }

//     i++
//   }
//   while(j<n){
//     if(arr[j]!=max&&arr[j]>sec){
//       sec=arr[j]
//     }
//     j++
//   }
//   console.log(max,sec)
// }

// secondLargest([1,3,5,9,6,7,8,10,11],9)


// -----------1st optimized solution --------------------


function secondLargest(arr, n) {
    let i = 0;
    let j = 0
    let max = arr[0];
    let sec = -1
    while (i < n) {

        if (arr[i] > max) {
            sec = max
            max = arr[i]
        }
        i++
    }
    console.log(max, sec)
}

secondLargest([1, 3, 5, 9, 6, 7, 8, 10], 8)

// -----------2nd optimized solution --------------------

function secondlargest(arr) {
    let largest = Number.NEGATIVE_INFINITY
    let secondLargest = Number.NEGATIVE_INFINITY
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest
            largest = arr[i]
        } else if (arr[i] != largest && secondLargest < arr[i]) {
            secondLargest = arr[i]
        }
    }
    console.log(secondLargest)
}
secondlargest([1, 2, 3, 4, 5, 45, 69, 78, 78, 23])