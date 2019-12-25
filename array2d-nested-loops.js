/*
 * Programming Quiz: Nested Numbers (6-10)
 *
 *   - The `numbers` variable is an array of arrays.
 *   - Use a nested `for` loop to cycle through `numbers`.
 *   - Convert each even number to the string "even"
 *   - Convert each odd number to the string "odd"
 */

// print a 2D array in row/col format to the console
 function print2DArray(array){
  let rowText = '';
  for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
          rowText+=array[i][j]+' ';
      }
      console.log(rowText);
      rowText='';
  }
}

var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

// your code goes here

let numRows = numbers.length;
let numCols = numbers[0].length;
console.log(numRows);
console.log(numCols);
for (row = 0; row < numRows; row++) {
  for (col = 0; col < numCols; col++) {
    if (numbers[row][col] % 2 === 0) {  // even numbers
      numbers[row][col] = "even";
    } else {
      numbers[row][col] = "odd";
    }
  }
}

//console.log(numbers)
print2DArray(numbers);