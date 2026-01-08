console.log("Hello world");
process.stdout.write("Hello world!");


function printSum(numOne, numTwo){
     console.log(`Sum:- ${numOne + numTwo}`);
}

printSum(10, 1.5);


function printAreaOfRectangle(length, width) {
     if (length <= 0 || width <= 0) {
          console.error('Area can not be 0 or negative value')
          return
     }
     const areaOfRectangle = length * width;
     console.log(areaOfRectangle);
}

printAreaOfRectangle(0, 4);
