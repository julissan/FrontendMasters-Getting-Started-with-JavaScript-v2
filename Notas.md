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

        "Not a Number" a special value that is returned when you try to use a non numeric value with numeric operations. (Invalid operation)

        Number.isNaN(value); will help us see if a valid turned into a NaN after an operation returning true in that case, false otherwise. Non numeric values that haven't been in invalidad operations aren't NaN values.

    - New:

        Use new (Wrappers):            Don't use new (Conversion type functions):
            Object()                       String()
            Array()                        Number()
            Function()                     Boolean()
            Date()              
            RegExp()
            Error()
        
    - Coercion:

        Coercion: The way to convert from one type to another.

        The "+" operator is oveloaded and will have a different behavior depending on its operands:

            number + number = number
            number + string = string
            string + number = string
            string + string = string

        When any of the operands is a string, it will convert the numeric types to string a make the concatenation (you can "add" an empty string to a number to turn in into a stirng value).  

    - Booleans:

        Falsy: Other values that when converted into boolean become "false".
        Truthy: Other values that when converted into boolean become "true".

        Falsy:                  Truthy:
            ""(empty string)        Every other value     
            0, -0
            null
            NaN
            false
            undefined

    - Coercion Best Practices:

        "A quality JS program embraces coercions, making sure the types involved in every operation are clear".
         Make "obvious" the types of the things you're using when making coercion, so it can be easily understood by other person that have to read the code.

    - Equality:

        == allows coercion (types different)
        === disallows coercion (types same)

        Coercive Equality: null == undefined

    - Types Summary:

        Like every other operation, is coercion helpfulin an equality  comparison or not?
        You should be making critical thinking decisions for yourself an decide based on the situation you're using it.

        "==" is not about comparisons with unknown types.
        "==" is about comparisons with known type(s), optionally where conversions are helpful.

        JavaScript has a (dynamic) type system, which uses various forms of coercion for value type conversion, including equality comparisons.

        You simply cannot write quality JS programs without knowing the types involved in your operations.

SCOPES & CLOSURES

    - Scopes: 

        The rules for where to look for things (variables).

    - Undefined vs Undeclared: 
        
        Undefined: Value of a variable that has been declared, but doesn't have a value assigned.
        Undeclared: The variable hasn't been declared.

    - Function Expressions:

        Is a function that is assigned as a value somewhere.
        They can be assigned to variables, passed to other functions as arguments or can be returned by other functions.

        Anonymous Function Expression:

            var clickHandler = function(){

            };

        Named Function expression:

            var keyHandler = function(){

            };

        For clarity it's a good practice to use named function expressions so other persons can understand the code more easily.

    - IIFE: 

        Immediately Invoked Function Expression
        It's a really common pattern.
        The function is invoked right after being declared as a value.

        It is it's own scope block (variables declared inside will not affect the variables of the global scope).

        Typically used in places of the code where you need to collect a set of variables and protect them from encroaching the outer scope.

    - Block Scoping with let:

        Insted of IIFEs you can use a curly brace block and declare variables using the keyword "let".
        It will become it's own scope block.
        Regularly used inside an "if statement"

        Is a godd practice using it to avoid variables on the global scope accidentally beaing reassigned, the variables should have the smaller scope possible to use them properly.

        Can be a very powerful tool for helping prevent bugs or problems to come back time later after the code was written.

    - Closures:

        Is when a function "remembers" the variables outside of it, even if you pass that function elsewhere.
        It is only a closure when that function is passed somewhere.


"this" KEYWORD & PROTORYPES

PRACTICE

WRAPPING UP
