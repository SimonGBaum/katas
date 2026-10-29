function evilFizzBuzz(start, end) {
    let x = start;
    let y = end;
    let nums = '';
    while (x < y) {
        if (x % 15 === 0) {
            nums += 'FizzBuzz';
            nums += ', ';
        } else if (x % 5 === 0) {
            nums += 'Buzz';
            nums += ', ';
        } else if (x % 3 === 0) {
            nums += 'Fizz';
            nums += ', '
        } else if (isPrime(x)) {
            nums += 'Wizz';
            nums += ', '
        } else {
            nums += x;
            nums += ', '
        }
        x += 1;
    }
    return nums;
};


function isPrime(x) {
  if (!Number.isInteger(x) || x < 2) return false;
  for (let i = 2; i * i <= x; i++) {
    if (x % i === 0) return false; // found a divisor other than 1 and x
  }
  return true;
};
console.log(evilFizzBuzz(1, 100));
// console.log(isPrime(19));
// module.exports = { evilFizzBuzz };