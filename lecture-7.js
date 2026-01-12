// 3,5
// 3,6,9,12,15

function printTable(tableNumber, end) {
     if (typeof tableNumber !== 'number' || typeof end != 'number') {
          return `Enter valid number`;
     }

     for (let i = 1; i <= end; i++) {
          console.log(i * tableNumber);
     }
}

printTable(2, 10);

let arrData = ['are you Okay', 'i am good'];

function getAllVowelsAsArray(arr) {
     if (!Array.isArray(arr)) {
          return `Enter valid array only`
     }

     if (arr.every(element => typeof element !== 'string')) {
          return 'Enter string array only!';
     }

     const vowels = 'aeiouAEIOU';
     let result = [];

     for (let str of arr) {
          for (let char of str) {
               if (vowels.includes(char)) {
                    result.push(char);
               }
          }
     }

     return result;
}

console.log(getAllVowelsAsArray(arrData));

let strData = 'hElloWorld!';

function getAllVowelsAsString(strInput) {
     if (typeof strInput !== 'string') {
          return `Enter valid string only!`;
     }

     const vowels = 'aeiouAEIOU';

     let result = '';

     for (let i = 0; i < strInput.length; i++) {
          if (vowels.includes(strInput[i])) {
               result += strInput[i];
          }
     }

     return result;
}

console.log(getAllVowelsAsString(strData));
