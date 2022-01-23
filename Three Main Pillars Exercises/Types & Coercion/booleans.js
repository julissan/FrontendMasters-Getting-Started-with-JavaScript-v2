var numStudents = 16;
var  newNumStudents = 17;

String(newNumStudents);

if(!!newNumStudents){
    numStudents = Number(newNumStudents);
}

console.log(numStudents);

var newStudents = ["Juan", "David", "Brayan", "Felipe", "Diego", "Alejandro"];

console.log(newStudents.length);

while(newStudents.length > 0){
    console.log(newStudents.pop());
}

console.log(newStudents.length);