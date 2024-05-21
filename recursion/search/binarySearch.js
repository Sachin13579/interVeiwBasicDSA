function recursiveBinary(arr,x,s,e){
if(s>e)
return false;


let mid=Math.floor((s+e)/2)

if(arr[mid]==x){
    return true
}


if(arr[mid]>x){
    return recursiveBinary(arr,x,s,mid-1)
}else{
    return recursiveBinary(arr,x,mid+1,e)
}
}
let arr = [1, 3, 5, 7, 8, 9];
let x=5
console.log(recursiveBinary(arr,x,s,e))
