function powerOfN(base,power){
    if(power==0){
        return 1;
    }
    return base*powerOfN(base,power-1);

}
// time complexity=O(n);
// space complexity=O(n);
//  oprimizedVersion

function optumPowerOfN(base, power){

    if(power==0){
        return 1
    }
    else if(power%2==0){
        return base*optumPowerOfN(base, power/2)
    }else{
        return base*optumPowerOfN(base, (power-1)/2)
    }

}


// console.log(powerOfN(4,2))
console.log(optumPowerOfN(4,4))