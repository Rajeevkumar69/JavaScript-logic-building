function calculateSumOfDigits(num) {
     if (typeof num !== 'number' || num <= 0) {
          return `Enter valid digits only`
     }

     let result = 0;

     let splittedNum = num.toString().split('');

     splittedNum.forEach(element => {
          result += parseInt(element);
     });

     return result;
}

console.log(calculateSumOfDigits(123));


// Logic 
let data1 = '1'
let data2 = '2'

let intData1 = parseInt(data1)
let intData2 = parseInt(data2)
console.log(parseInt(intData1+intData2));