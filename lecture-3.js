function reverseString(str) {
     if (typeof str !== 'string' || str.trim() === '') {
          return 'Enter valid string';
     }


     return str.split('').reverse().join();

     // let result = '';

     // for(let i = 0; i < str.length; i++){
     //      result = 
     // }
}
