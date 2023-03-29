function checkPrime(n) {
  if (n < 2) {
    return "not a prime number";
  }

  let flag = true;
  for (let i = 2; i <= n / 2; i++) {
    // console.log(n, i);
    if (n % i == 0) {
      flag = false;
    }
  }
  return flag ? "itsPrime" : "Not a prime number";
}
console.log(checkPrime(0));
