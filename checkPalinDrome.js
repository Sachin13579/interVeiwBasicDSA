//Input:--
var number = "ram"; //ram //racecar

// Using inBuilt JS methods
var reverseNumber = String(number).split("").reverse().join("");

console.log(Number(reverseNumber) == number);

//BruteforceMethod
function checkPalin(n) {
  let strNum = n;

  let flag = true;
  let N = Math.floor(strNum.length / 2);

  for (let i = 0; i < N; i++) {
    for (let j = strNum.length - 1; j > N; j--) {
      if (strNum[i] == strNum[j]) {
        i++;
      } else {
        flag = false;
        break;
      }
    }
  }
  console.log(flag ? "yes" : "No");
}

checkPalin(number);
