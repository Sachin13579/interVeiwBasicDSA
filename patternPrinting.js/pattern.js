//print square of 4*4
// for (let i = 1; i <= 4; i++) {
//   let str = "";
//   for (let j = 0; j < 4; j++) {
//     str += "*";
//   }
//   //   console.log(str)
// }
// print hollow square of 4*4
for (let i = 1; i <= 4; i++) {
    let str = "";
  for (let j = 0; j < 4; j++) {
    if (i == 1 || i == 4) {
      str += "*";
    } else if (true) {
      if (j == 0 || j == 3) {
        str += "*";
      } else {
        str += " ";
      }
      // console.log(str[i])
      // console.log(str.length)
    }
}
// str+="\n"
console.log(str);
}
