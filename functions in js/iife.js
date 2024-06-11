//Immediately Invoked function Expression(IIFE)

function raj (){
    console.log("Database connected");
}
raj();


// An IIFE (Immediately Invoked Function Expression) is a JavaScript function 
// that runs as soon as it is defined. It is a design pattern also known as
//  a Self-Executing Anonymous Function and contains two major parts:

// Function Expression: The function itself is defined within parentheses.
// Invocation: The function is invoked immediately after its definition.



// example:::::::::

// syntax:
// (function Expression)(Invocation)

(function raj (){
    console.log("Database connected");
}
)();


// in arrow function iffe kasari lekhni watch below::::::

//it is a named iffe::
(function raaja() {
    console.log("Database again Connected");
}) ();

// >>>>>>>>>>>>>>>

//this is unnamed iffe
( () => {
    console.log("Database again Connected");
}) ();



//passing a parameter in iffe
( (name) => {
    console.log(`Database again Connected ${name}`);
}) ("Rajan");

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

