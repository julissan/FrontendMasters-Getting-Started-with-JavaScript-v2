var teacher = "kyle";

function otherClass(){
    teacher = "Suzy";           //There is no declaration for teacher inside otherClass, it's going to find the variable in the outer scope    
    topic = "React";            //There is no declaration for topic inside otherClass or in the outer scope, 
    console.log("Welcome!");    //because the program isn't in strict mode, it automatically gets declared in the outer scope
    
}

console.log(teacher);

otherClass();

console.log(teacher);
console.log(topic);