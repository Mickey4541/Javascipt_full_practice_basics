// falsy values = false, 0, -0, BigInt, 0n, "", null, undefined, NaN
// truthy values = everything beside these falsy values ANDDDD 
// "0" , 'false' , " " , [], {}, function(), 



const userEmail = "Rajan" //if we assign any value, simply it is truthy.
const USeremail = "" // there is no any value, so it is falsy
const userAge = [] //it is tuthy.

if (userEmail){
    console.log("User Email is valid");
    /*this true part gets executed because we have declared user
    email as Rajan.*/
    } else{
        console.log("User Email is not valid");
    }
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
if (userEmail.length === 5){
    console.log("Array has 5 letters as Rajan.");
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const emptyObject = {}
if (Object.keys(emptyObject).length === 0){
    console.log("Object is really Empty");
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//false == 0 is true
//false == '' is also true
// 0 == '' is also true
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// ********Nullish Coalescing Operator (??): yesle null ra  undefined dina sakxa ra yo operator null ra undefined ki lagi matra baneko ho**************
    let val1;
    val1 = 5 ?? 10 ; // returns 5

    val1 = null ?? 10  ; // returns 10

    val1 = undefined ?? 15  ; // returns 15

    val1 = null ?? 10 ?? 20   ; // returns 10.. jo value first maa vetyo tei return garxa.

    console.log(val1);


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//ternary operator::::::::::::::::::::::::;;;;

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");;
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
