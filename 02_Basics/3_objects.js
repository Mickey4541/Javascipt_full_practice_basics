//declaring objects is in two types:
//literals and constructor
//singleton means that any constructors you made..there made a singleton object
// whenever we declare objects as a literals,there is no singleton
// and if we made objects from constructors, there made a singleton

//objects literals:
const mySym = Symbol("key1");//declaring symbol

Object.create // this is a constructor method to made objects and isi ki andar singleton banta hey
const jsUser = {
    name: 'Ali', //yo name lekhako chai string maa process hunxa
    age: 22,
    email: "user@gmail.com",
    isLoggedIn: false,
    "full name": "Rajan Bhandari",
    //symbol ki tarha use karna hey toh mysymbol ko square bracket maa rakhnu parxa
    [mySym]: "mykey1"//using symbol as a key////or object ko key maa add garko
}
console.log((jsUser.email));
console.log((jsUser["email"]));
console.log((jsUser["full name"]));//this is the only way to access this type of object.
console.log(jsUser[mySym]);//tei symbol lai print gareko aani output is :[Symbol(key1)]: 'mykey1'

//overriding the values with new value
jsUser.email = "keshav@gmail.com"
//locking value so that no one can change it
// Object.freeze(jsUser)
jsUser.email = "rajjjjan@gmail.com";
console.log(jsUser);


jsUser.greeting = function(){
console.log("Hello Js User");
}

jsUser.greetingTwo = function(){
console.log(`Hello jsUSer, ${this.name}`);
}
console.log(jsUser.greetingTwo());
console.log(jsUser.greeting());


