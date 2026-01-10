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
