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

printTable(2,10);