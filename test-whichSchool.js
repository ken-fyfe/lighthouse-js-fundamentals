const whichSchool  = function (age) {
  /* This function determine what type of school one should attend
   * based on their age
   *   input:  age           age of subject: number > 0
   *   output: schoolString  type of school: string
   */
  var schoolString = "";
  if (age < 0) {
    schoolString = "ERROR - age must be greater than zero";
  } else if (age > 0 && age < 13) {
    schoolString = "Elementary School";
  } else if (age >= 13 && age <= 18) {
    schoolString = "Secondary School";
  } else {
    schoolString = "Lighthouse Labs";
  }
  return schoolString;
}

console.log(whichSchool(-1))
console.log(whichSchool(12))
console.log(whichSchool(13))
console.log(whichSchool(18))
console.log(whichSchool(40))