/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 *
 * Use only the splice() method to modify the rainbow variable:
 *  - remove "Blackberry"
 *  - add "Yellow" and "Green"
 *  - add "Purple"
 */

var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];

// your code goes here

var deleted = rainbow.splice(2,1);
console.log(deleted, rainbow);
var deleted = rainbow.splice(2,0, "Yellow", "Green");
console.log(deleted, rainbow);
//var deleted = rainbow.splice(rainbow.length,0, "Purple");
// or could use push instead
rainbow.push("rainbow")
console.log(deleted, rainbow);