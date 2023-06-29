function getSumOfDigits(n) {

  if (n < 10) {
    return n; 

  } else {
      return getSumOfDigits(n.toString().split('').reduce((acc, curr) => acc + Number(curr), 0));
  }
}

//   return String(n)
//   .split('')
//   .reduce((accumulator, digit) => {
//     return accumulator + Number(digit);
//   }, 0);
// console.log(accumulator);
// }


  getSumOfDigits();
let n = 91;