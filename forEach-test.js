/*
 * Programming Quiz: Another Type of Loop (6-8)
 *
 * Use the existing `test` variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 *
 * Things to note:
 *  - you must use an `if` statement to verify code is divisible by 3
 *  - you can use `console.log` to verify the `test` variable when you're finished looping
 */

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139
];

// Write your code here

test.forEach(function(number) {
  if (number % 3 === 0) {
    number += 100;
    console.log(number)
  }
});

var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99,
             10.00, 99.22, 102.20, 100.10, 6.77, 2.22];
var billWithTip = bills.map(function(eachBill) {
  eachBill *= 1.15;
  return eachBill;
});

console.log(billWithTip)