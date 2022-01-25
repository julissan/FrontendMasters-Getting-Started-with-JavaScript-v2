//Dynamic Context
//Implicit Binding Rule:

var workshop = {
    teacher: "Kyle",
    ask(question){
        console.log(this.teacher, question);
    },
};

workshop.ask("What is implicit binding?");
//Kyle What is implicit binding?

//Explicit Binding Rule:

function ask(question){
    console.log(this.teacher, question);
}

function otherClass(){
    var myContext = {
        teacher: "Suzy"
    };
    ask.call(myContext, "Why?");
}

otherClass();
//Suzy Why?