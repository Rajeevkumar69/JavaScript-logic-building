function reverseString(str) {
     if (typeof str !== 'string' || str.trim() === '') {
          return 'Enter valid string';
     }

     let result = '';

     for (let i = str.length - 1; i >= 0; i--) {
          result += str[i]
     }
     return result;

     // return str.split('').reverse().join('');
}

console.log(reverseString('Software development'));


function findDuplicate(arrayArg) {
     if (!Array.isArray(arrayArg)) {
          return 'Enter valid array';
     }

     let seen = new Set();
     let result = [];

     for (let i = 0; i < arrayArg.length; i++) {
          if (seen.has(arrayArg[i])) {
               result.push(arrayArg[i]);
          } else {
               seen.add(arrayArg[i]);
          }
     }

     return result;
}

console.log(findDuplicate([1, 2, 5, 5, 1, 5, 4, 2, 3]));


function findLargest(arr) {
     if (!Array.isArray(arr) || arr.length === 0) {
          return `Enter valid array only!`;
     }

     if (arr.every(e => e !== 'number')) {
          return `Enter valid number array only!`;
     }

     let result = arr[0];

     for (let i = 0; i < arr.length; i++) {
          if (arr[i] > result) {
               result = arr[i];
          }
     }

     return result;
}

console.log(findLargest([1, 2, 5, 5, 1, 5, 4, 2, 3]));