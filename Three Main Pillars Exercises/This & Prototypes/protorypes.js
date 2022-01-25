//Prototypes as "Classes"
function Workshop(teacher){
    this.teacher = teacher;
}

Workshop.prototype.ask = function(question){ //Adding a function to the Workshop "Class" passing the function to the prototype of the Workshop constructor function (using a function expression) 
    console.log(this.teacher, question);
};

var deepJS = new Workshop("Kyle");
var reactJS = new Workshop("Suzy");

deepJS.ask("Is 'prototype' a class?");
//Kyle Is 'prototype' a class?

reactJS.ask("Isn't 'prototype' ugly?");
//Suzy Isn't 'prototype' ugly?