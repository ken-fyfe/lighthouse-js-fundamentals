/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* ";
  }
  return line + "\n";
}

// creates a triangle of lines of increasing lengths
function buildTriangle(maxWidth) {
  let lineString = "";
  for (let lineNum = 1; lineNum <= maxWidth; lineNum++) {
    lineString += makeLine(lineNum);
  }
  return lineString;
}

console.log(buildTriangle(10));