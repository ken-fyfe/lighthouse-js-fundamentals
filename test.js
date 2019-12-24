/*
 * Programming Quiz: Laugh it Off 1 (5-1)
 */
// your code goes here
function laugh(numHa) {
  let hahaString = "";
  for (let i = 1; i < numHa+1; i++) {
    hahaString += 'ha'
  }
  return hahaString + "!";
}

console.log(laugh(0));
