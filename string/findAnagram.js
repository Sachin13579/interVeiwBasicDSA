// function findAnagram(s1,s2){
//     let obj={};
//     let arr=s1.split('')
//     for(let i=0;i<arr.length;i++){
//         if(obj[arr[i]]!==undefined){
//             obj[arr[i]]+=1
//         }else{
//             obj[arr[i]]=1
//         }
//     }
//     let desArr=Object.keys(obj)
//     console.log(arr,desArr)
//     for(let j=0;j<s2.length;j++){

//         if(!arr.includes(s2[j])){
//             return false;
//         }
//     }
//     return true
// }

// ----------------short method ---------------------------------
function findAnagram(s1, s2) {

    let arr = s1.split('')
    for (let j = 0; j < s2.length; j++) {
        // ---inbuilt function-----
        // if(!arr.includes(s2[j])){
        //     return false;
        // }
        // -----My Functuion--------
        if (!include(arr, s2[j])) {
            return false;
        }

    }
    return true
}
//-------------------End ----------------------------------------
// ----------------Include function -----------------------------
function include(Arr, letter) {

    let flag = false
    for (let i = 0; i < Arr.length; i++) {
        if (Arr[i] == letter) {
            flag = true;
            break

        }
    }
    if (!flag) {
        return false
    } else {
        return true
    }
}




let s1 = "repeat";
let s2 = "kat";
console.log(findAnagram(s1, s2))