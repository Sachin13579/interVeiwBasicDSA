let input =[1,[2],[3,4],5]

//solving it using Inbuil function
// console.log(input.flat())

//brutForce method
// let arr=[]
function flatArray(input){
let res=[]
    for(let i=0;i<input.length;i++){
        if(Array.isArray(input[i])){
            //option1
            res=res.concat(flatArray(input[i]))
            //option 2
        // res.push(...flatArray(input[i]))
    }
    else{
        res.push(input[i])
    }
}
return res
}
console.log(flatArray(input))