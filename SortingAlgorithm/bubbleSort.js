// input array
let array=[1,2,4,6,8,7,6,0,3]
//bubble sort in descending Order
const bubbleSort=(arr,n)=>{
for(let i=0;i<n;i++){
    
    for(let j=i+1;j<n;j++){
            if(arr[i]<arr[j]){
                let k=arr[j]
                arr[j]=arr[i]
                arr[i]=k
            }
    }
}
console.log(arr)
}
bubbleSort(array,array.length)