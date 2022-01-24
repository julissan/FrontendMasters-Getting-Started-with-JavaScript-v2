var teacher = "Kyle";

console.log(teacher);           //Kyle

(function anotherTeacher(){
    var teacher = "Suzy";
    console.log(teacher);       //Suzy
})();

console.log(teacher);           //Kyle