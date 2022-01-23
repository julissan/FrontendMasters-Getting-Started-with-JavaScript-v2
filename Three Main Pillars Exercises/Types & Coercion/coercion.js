var message1 = "There are ";
var numStudents = 16;
var message2 = " students.";
console.log(message1 + numStudents + message2); 
//When concatenating the number 16 to the string, it becomes a string (implicit coercion).

console.log(`There are ${numStudents+""} students.`);
//Same, but using a interpolated string.

console.log(typeof numStudents);
numStudents = numStudents+"";
console.log(typeof numStudents);

function addAStudent(numStudents){
    return numStudents + 1;
}

console.log(addAStudent(Number(numStudents)));