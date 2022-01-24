//Insted of the IIFE.js
var teacher = "Kyle";

console.log(teacher);           //Kyle

{
    let teacher = "Suzy";       //A totally separated variable from the teacher on line 1, encapsulation principle
    console.log(teacher);       //Suzy
}

console.log(teacher);           //Kyle

//************

function diff(x,y){
    if(x > y){
        let tmp = x;            //The tmp variable is only accesible inside the if block
        x = y;
        y = tmp;
    }

    return y - x;
}

//************

function repeat(fn, f){
    var result;                 //Besides using the "var" keyword, as it is inside a function it is accesible inside the whole function, but not in the global scope

    for(let i = 0; i < n; i++){ //The index i is only used inside the for parameter, so it should only exist/be accesible inside this parenthesis
        result = fn(result, i);
    }

    return result;
}

//************

function formatStr(str){
    {
        let prefix, rest;                   //If a variable is not needed throughout the function is a godd practice to use a curly brace block to encapsulate it only to the lines where it's needed
        prefix = str.slice(0, 3);
        rest = str.slice(3);
        str = prefix.toUpperCase() + rest;
    }

    if(/^FOO:/.test(str)){
        return str;
    }

    return str.slice(4);
}