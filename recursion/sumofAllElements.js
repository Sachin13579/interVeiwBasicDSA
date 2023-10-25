function sum(arr,n) {
if (n==0||n==1){
    return arr[0];
}
let suM = 0;

 sum(arr.slice(1),n-1)
 return sum
}
console.log(sum([1,2,3,4,5],5));