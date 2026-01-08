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
     if (!Number(num1) && Number(num2) && Number(num3)) {
          return 'enter valid num'
     }
     if (num1 < num2 && num1 < num3) {
          return num1;
     } else if (num2 < num1 && num2 < num3) {
          return num2;
     } else {
          return num3;
     }

     // return Math.min(num1, num2, num3);
}

console.log(findSmallest(4.55, -10, 11));
