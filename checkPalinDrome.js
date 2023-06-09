//Input:--
var number = "ram"; //ram //racecar

// Using inBuilt JS methods---------------------------------------------------------------------------

// var reverseNumber = String(number).split("").reverse().join("");
// console.log(Number(reverseNumber) == number);

//BruteforceMethod------------------------------------------------------------------------------------

// function checkPalin(n) {
//   let strNum = n;
//   let flag = true;
//   let N = Math.floor(strNum.length / 2);
//   for (let i = 0; i < N; i++) {
//     for (let j = strNum.length - 1; j > N; j--) {
//       if (strNum[i] == strNum[j]) {
//         i++;
//       } else {
//         flag = false;
//         break;
//       }
//     }
//   }
//   console.log(flag ? "yes" : "No");
// }
// checkPalin(number);

// Optimized way---------------------------------------------------------------------------------------

function optimizedCheckPalin(number) {
  if (number < 0) {
    return "ERROR: cant'determine because number is negative";
  }
  let numStr = number.toString();
  let n = numStr.length;
  let flag = true;
  for (let i = 0; i < n / 2; i++) {
    if (numStr[i] !== numStr[n - 1 - i]) {
      flag = false;
      break;
    }
  }
  return flag ? "yes" : "no";
}
console.log(optimizedCheckPalin("racecar"));
