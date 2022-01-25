//Class Syntax
class Workshop {
    constructor(teacher){
        this.teacher = teacher;
    }
    ask(question){
        console.log(this.teacher,question);
    }
}

var deepJS = new Workshop("Kyle");
var reactJS = new Workshop("Suzy");

deepJS.ask("Is 'class' a class?");
//Kyle Is 'class' a class?

reactJS.ask("Is this class OK?");
//Suzy Is this class OK?