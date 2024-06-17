
//if
const isUSerLoggedIn = true
const temperature = 30

if(temperature > 50){
    console.log("less than 50");
}
else{
    console.log("more than 50");///this is executed.
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
if(temperature === 50){
    console.log("less than 50");
}
else{
    console.log("more than 50");///this is executed.
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

if(2 == "2"){
    console.log("executed"); //executed
}
// <, >, <=, >=, ==, !=, ===

if(2 === "2"){
    console.log("executed"); //not executed
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const score = 200

if(score > 100){
    const power = "fly" //yaha var use garim vani bahira ko console.log pani run hunxa because var has global scope.
    console.log(`User has power to ${power}`);
}
// console.log(`User has power to ${power}`);//this line is not execute because power variable has scope inside if block only.

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Shorthand Notation::::::::::::::::::::::::
const balance  = 1000
//this is very unreadable code, so avoid writing like this..
// if (balance > 100) console.log("test"), console.log("Test2");

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

if(balance < 500){
    console.log("balance is low than 500");
}
else if(balance < 750){
    console.log("balance is low than 750");
}
else if(balance < 900){
    console.log("balance is low than 900");
}else{
    console.log("balance is exact 1000");//executed
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = false
//AND maa 2 sabai condition true hunu parxa. Natra run hudaina.
if(userLoggedIn && debitCard && 2==2){
    console.log("You can make a transaction");
}

//OR:::One of the condition must be true
if(loggedInFromEmail || loggedInFromGoogle || true){
    console.log("Ok, you are logged in.");
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
