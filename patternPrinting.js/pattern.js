// square of * of 5 size

// function squarePattern(n){
//     let str=""
//     for(let i=0;i<n;i++){
//         for(let j=0;j<n;j++){
            
//             str+=i
//         }
//         str+="\n"
//         console.log(str)
//     }
// }
// squarePattern(5)



// printe pattern like----------------------------------------------------------------------
// 1,2,3,4
// 1,2,3,4
// 1,2,3,4
// 1,2,3,4

// function squareWithNuber(n){

//     let i=1
//     let str=""
//     while (i<=n) {
//         let j=1
//         while (j<=n) {
//             str+=j+" "
//             j++
//         }
//         str+="\n"
// i++
//     }
//     console.log(str);

// }
// squareWithNuber(4)

// lets print incremeting Count pattern----------------------------------------------------------
// function squareWithNuber(n){

//     let i=1

//     let str=""
//     let count=1
//     while (i<=n) {
    //         let j=1
    //         while (j<=n) {
//             str+=count+" "
//             count++
//             j++
//         }
//         str+="\n"
// i++
//     }
//     console.log(str);

// }
// squareWithNuber(4)


// ----/-----------------------------------------/---TRIANGLES------/------------------------------------/--

    // function rightAngleTriangle(n){
    //     let str=""
    //     for (let i = 0; i < n; i++) {
    //         // const element = array[i];
    //         for (let j=0;j<=i;j++){
                
    //             str+="*"
    //         }
    //         str+="\n"
    
    //     }
    //     console.log(str)
        
    // }
    // rightAngleTriangle(4)

// triangle with Numbers
// 1
// 12
// 123

const numberTriangle=(n)=>{
        let str=""
    for(let i=1;i<=n;i++){
        
        for(let j=1;j<=i;j++){
                str+=i-j+1
                

        }
        str+="\n"
    }
    console.log(str)

}
numberTriangle(4)
// const numberTriangle=(n)=>{
//             let str=""
//         for(let i=1;i<=n;i++){
//             // let val=i
//             for(let j=1;j<=i;j++){
//                     str+=i+j-1
//                     // val++
    
//             }
//             str+="\n"
//         }
//         console.log(str)
    
//     }
//     numberTriangle(4)

