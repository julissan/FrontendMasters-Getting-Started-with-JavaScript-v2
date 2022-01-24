function ask(question){
    setTimeout(function waitASec(){     //Passing the function expression as an argument callback
        console.log(question);          //waitASec function expression, "remembers" the question parameter declared on ask function
    }, 100);                            //before setTimeout gets executed ask function has finished,                                      
}                                       //but the inside of waitASec still has the question variable that has been passed to the ask function because of the closure

ask("What is closure?");


//**********

function ask2(question){
    return function holdYourQuestion(){     //Returning the function expression
        console.log(question);
    }
}

var myQuestion = ask2("What is closure?");  //Assigning the function expression as a variable

myQuestion();                               //Executing the function later in the program it still "remembers" the content of the "question" variable because of the closure.
