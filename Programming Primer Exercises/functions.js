var students = ["Juan", "David", "Brayan", "Felipe", "Diego", "Alejandro"];

function greetStudent(student){
    console.log("hello, " + student + "!");
}

greetStudent(students[0]);

greetStudent(students[2]);

greetStudent(students[3]);

greetStudent(students[4]);

greetStudent(students[1]);

greetStudent(students[5]); //Greeting in an order different from the list


var timeElapsed = 42;
var endTime = 240;

function timeRemaining(timeElapsed, endTime){
    return endTime - timeElapsed;
}

console.log(timeRemaining(timeElapsed, endTime)); //Print the result of the operation