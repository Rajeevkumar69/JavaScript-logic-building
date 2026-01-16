function calculateFactorial(num) {
     if (typeof num !== 'number' || num < 0) {
          return 'Enter non-zero number only';
     }

     let result = 1;

     for (let i = 1; i <= num; i++) {
          result *= i;

     }
     return `${result}!`;
}

// 4*3*2*1 = 24!

console.log(calculateFactorial(4));

// Given an integer n, find its factorial. Return a list of integers denoting the digits that make up the factorial of n.

// Examples:
// Input: n = 10
// Output: [3, 6, 2, 8, 8, 0, 0]
// Explanation: 10! = 1*2*3*4*5*6*7*8*9*10 = 3628800

function findFactorial(numInput) {
     if (typeof numInput !== 'number' || numInput < 0) {
          return `Enter valid non-zero number only`
     }

     let result = [];

     for (let i = 1; i <= numInput; i++) {
          result.push(i);
     }

     return result;
}

console.log(findFactorial(10));
