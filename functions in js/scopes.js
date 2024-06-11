if (true){
    let a = 10;
    const b = 20;
    var c = 30;
    console.log(a); //accessible
    console.log(b); //accessible
}

//  {} => curly brackets are called scopes.
// console.log(a); //not accessible
// console.log(b); //not accessible
// console.log(c); //accessible cuz it uses var.

//so var is global scope and let and const are function scope.

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// When a function is defined within another function, 
// the inner function has access to the variables and parameters
//  of the outer function, even after the outer function has
//   finished executing. This is possible because the inner 
//   function maintains a reference to the outer function's
//    scope chain, forming a closure.
function one(){
    const userNAme = "Rajan";

    function two(){
        const website = "frontendmasters";
        console.log(userNAme);
        console.log(website); // accessible

    }
    // console.log(website); //not accessible
    // two();
    console.log(userNAme);
}
one();


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// in if else
if (true){
    const userName = "Rajan";
    if(userName == "Rajan"){
        const website = "youtube";
        console.log(userName + website);
    }
    // console.log(website); //not accessible
}
// console.log(userNAme); //not accessible

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>INTRESTING>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
addOne(5); //function banayera teslai kunai pani 
// variable maa store garako xaina vani yesari 
// top bata call garera access garna milxa.
function addOne(num){
    return num + 1;
}
addOne(5);

//in js variable like here(addTwo) can hold functions, 
// json and many other things.




addTwo(10); //function banayera kunai variable maa store garepaxi 
// teslai top maa yesari rakhera access garna mildaina.
const addTwo = function(num){
    return num + 2;
}
addTwo(10);