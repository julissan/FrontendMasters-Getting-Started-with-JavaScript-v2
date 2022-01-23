FrontendMasters-Getting-Started-with-JavaScript-v2 Kyle Simpson

Class notes and exercises

INTRODUCTION

    Teacher: Kyle Simpson (aka getify)
    Author of the book series You Don't Know Javascript Yet (YDKJSY)
    The course can be complemented with the book You Don't Know Javascript Yet UP & GOING

    Three main pillars of JS:

        - Types/Coercion
        - Scopes/Closures
        - "this" keyword/Prototypes

PROGRAMMING PRIMER IN JS:

    - Values: 

        Numbers (42, 3.14)
        Strings ("Hello World")
        Boolean values (true, false)
        Empty values (null, undefined)
        Arrays ([1, 2, 3])
        Objects ({ name: "Juan David" })

    - Operations:

        Math (3 + 4 = 7, 43 - 1 = 42)
        String concatenation ("Juan David " + "Lis Santofimio" = "Juan David Lis Santofimio")
        Boolean negation/complement (!false = true, !true = false)
        Equality comparison (3.0 == 3 = true, 3 == 4 = false)
        Less than/more than comparison (3 < 4 = true, 3 > 4 = false)
        OR operator ( true || false = true, false || false = false)
        AND operator ( true && true = true, true && false = false)
        Assignment operator (name = "Juan David", console.log(name) = "Juan David")

    - Types:

        A type is the name given to the kind of value in programming (at least in JS).
        "typeof" is an operator that when used on a value will return its type:
            typeof 42                       // "number"
            typeof "Hello World"            // "string"
            typeof true                     // "boolean"
            typeof undefined                // "undefined"
            typeof { name: "Juan David" }   // "object"
            typeof null                     // "object" !?!?
            typeof [1, 2, 3]                // "object"

    - Variables:

        Is  place in the memory(RAM) of the computer, the variable stores a pointer to the place in the memory
        where the value is stored.
        Variable operators(for number type varaibles):
        var++; (Go find the value in var, add 1 to it, then assign the new value to var)
        var += a; (Same as ++ operator but specifying the value you're adding to var)
        var--; (Opposite to ++, decreases by 1 the value and reassign it to the variable)
        var -= a; (Opposite to +=, speficies the ammount to decrease from the value and reassign it to the variable)

    - Expressions and Statements:

        Statements are composed of multiple expressions, statement are the whole "sentence" we are telling to 
        the computer, while expressions are from literal values or calling for variables, to operations between those.

    - Decisions:

        Used to take decisions inside the code.

        "If - Else" statement 
        Structure:
            if(){
                //If true, execute this code
            }else{
                //If false, execute this code
            }
        Inside the parenthesis there is a comparison that will return a boolean value as result, 
        depending on the result, if true: the code inside the "if" curly braces will be executed, 
        otherwise: the code inside of the "else" curly braces will be executed.

        "If" statement
        Structure:
            if(){
                //If true, execute this code
            }
        Works the same as "if - else", but if the comparison results in a false, the code inside the "if" 
        curly braces will be skipped and the program will continue since there is no "else" statement.

    - Loops:

        Used to repeat and instruction or a set of instructions multiple times.

        "Index for" statement
        Structure:
            for(let i=0; i<j; i++){
                //This code gets executed j times
            }
        Uses an index to determine how many times the code inside gets executed, usually the index starts at 0,
        each time the code gets executed it increases by 1 and it repeats until index stops being smaller than a 
        second value (j).

        "List for" statement
        Structure:
            for(let elementOfList of list){
                //This code gets executed once per element on the list
            }
        Similar to the "index for" but it is used over a list of values and the code inside gets executed
        once for every element on the list.

        "While" statement
        Structure:
            while(j>0){
                //The code to execute goes here and will execute until j=0
                j--; //Or while using a list, removing elements with each iteration to eventually end the loop.
            }
        Similar to the "index for" but it gets executed until the condition inside the parenthesis becomes false.

    - Functions:

        Collection of statements that could be used multiple times in different places, so you can group
        the statements inside a function block to call it whenever you need it.

        Structure:
            function functionName(parameterName){ //You can have as many input parameters as you want or none, but when you call the function you must pass them over to the function
                //The code executed goes here and can use parameterName as a variable that already exists
            }

        Interpolated string: A type of string where you can put variable values directly inside of it´, 
        it is denoted using backticks (f.e. `Hello, ${student.name}!`). 

TYPES & COERCION

    - Primitive Types:

        "in JavaScript everything is an object." Myth (100% false)

            Undefined           Null? (works in a strange way)
            String              Function? (subtype of object)
            Number              Array? (subtype of object)
            Boolean
            Object
            Symbol  

        In JavaScript, variables don't have types, values do. (Different to other languages like Java)

    - NaN:

        

    - New:

    - Coercion:

    - Booleans:

    - Coercion Best Practices:

    - Equality:

    - Types Summary:

SCOPES & CLOSURES

"this" KEYWORD & PROTORYPES

PRACTICE

WRAPPING UP