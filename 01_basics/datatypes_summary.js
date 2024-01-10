//#Primitive datatpes : 
//7 Types : string, number, Boolean, Null, Undefined,symbol, BigInt


/*JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you don't need to
 explicitly declare the data type of a variable when you define it. JavaScript variables can hold values of any type, and their 
 types can change during the execution of a program. This dynamic typing flexibility allows for more fluid and adaptable coding 
 but also requires careful attention to type-related issues during development.*/

const score = 100 // number define
const scoreValue = 100.3 //number define


const isLoggedIn = False // Boolean define
const outsideTemp = null  // null define

let userEmail; //undefined 


//symbol define
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);


const bigNumber = 4564264645653232n //last maa n lagaye paxi bigint hunxa tara aali sano number xa vani na lagaye pani hunxa.



//Reference(Non-Primitive):
//Array, Objects, Functions


const heros = ["rajan", "Shaktiman", "nnagraj"] //array define


//objects are stored inside curly brackets like:
//aani object lai myobj vanni variable maa store gareko matra ho tara
//object sabai curly brackets maa nai lekhinchha.
let myobj = {
    name : "Rajan",
    age : "22",
    }


    //function declaration
    const myFunction = function(){
        console.log("Hello World");
    }


 //how to find the datatypes of any  values??:

 //The return type ot the datatype of any function is called object function.

 //Note: The datatype of null is object. This is rule found in google ecma script.
 console.log(typeof bigNumber);  


 /*
 Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
       */