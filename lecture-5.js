function isLeapYear(year) {

     if (typeof year !== 'number' ) {
          return `Enter year in number only`;
     }

     if (year % 4 === 0 || year % 400 === 0) {
          return true;
     }
     return false;

}

console.log(isLeapYear("2028"));

