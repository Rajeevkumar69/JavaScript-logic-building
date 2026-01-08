function checkEvenOrOdd(number) {
     if (number % 2 === 0) {
          console.log('Even');
     } else {
          process.stdout.write('Odd number');
     }

     // console.log(number % 2 === 0 ? 'Even' : 'Odd');


}

checkEvenOrOdd(125);

function findSmallest(num1, num2, num3) {
     if(typeof(num1) !== 'number' || typeof(num2) !=='number' || typeof(num3) !== 'number'){
          return 'Enter valid number only'
     }

     if (num1 <= num2 && num1 <= num3) {
          return Number(num1);
     } else if (num2 <= num1 && num2 <= num3) {
          return Number(num2);
     } else {
          return Number(num3);
     }
}

console.log(findSmallest(12, -10, 11));

