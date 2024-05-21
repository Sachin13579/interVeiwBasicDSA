function rotateArray(arr, n) {
    /**
     * Method to rotate an array
     
     arr.reverse();
     let left = arr.slice(0, n);
     let right = arr.slice(n, arr.length);
     left.reverse();
     right.reverse();
 
     let newArray = [...left, ...right];
     console.log({ newArray, arr })
     */

    let result = ReverseArrya.function(arr, 0, n);
    let leftReversal = ReverseArrya.function(result, 0, 2);
    let rightReversal = ReverseArrya.function(result, 2, n);
    let newArray = [...leftReversal, ...rightReversal];
    console.log(newArray);

}
class ReverseArrya {
    static function(arr, start, n) {
        let bag = []
        for (let i = n - 1; i >= start; i--) {
            bag.push(arr[i])
        }
        // console.log(bag)
        return bag
    }
}

//above solution has O(N) time complexity and O(N) space complexity;


//====================METHOD 2------------------------------------------------
function rotateArray(arr, k) {
    // let reverseArray=arr.reverse();
    k = k % arr.length;
    reverseArray(arr, 0, arr.length - 1);
    reverseArray(arr, 0, k - 1);
    reverseArray(arr, k, arr.length - 1);
    console.log(arr)
    // let rotateArray=[...reverseLeft,...reverseRight]
    // console.log(rotateArray)
}
rotateArray([1, 2, 3, 4, 5], 5)
// Output----[4,5,1,2,3]
function reverseArray(arr, s, e) {
    // console.log(arr,s,e)
    // let reverseArr=[]
    //   for (let i =e;i>=s;i--){
    //     reverseArr.push(arr[i])
    //   }
    //   return reverseArr
    // let reverseArr=[]
    for (let i = s; i < e; i++) {
        [arr[s], arr[e]] = [arr[e], arr[s]]
        s++
        e--
        // reverseArr.push(arr[i])
    }
    // while (s < e) {
    //   [arr[s], arr[e]] = [arr[e], arr[s]];  // Swap elements
    //   s++;
    //   e--;
    // }
}


// Above solution has O(N) time complexity and O(1) space complexity;


rotateArray([10, 20, 30, 40, 50], 5)