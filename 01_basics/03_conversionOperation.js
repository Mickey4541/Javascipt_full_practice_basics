let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);//number
//console.log(valueInNumber); //not a number


//"33" = 33
//"33abc" = NaN
//true = 1 : false = 0


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//so, 1 = true
//0 = false
// "" = false
//"Rajan" = true


let someNumber = 33
//let stringNumber = string(someNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber); //to check if it is converted or not


//*****************Operations********************
let value = 3
let negativeValue = -value
console.log(negativeValue);


console.log(2**3)//two to the power 3



let str1 = "Hello"
let str2 = " Rajan"
let str3 = str1 + str2
console.log(str3)  //string concatenate


console.log("1" + 2)//12
console.log(2 + "1")//21
console.log("1" + "2")//12
console.log("1" + 2 + 2)//122
console.log(1 + 2 + "3")//33
