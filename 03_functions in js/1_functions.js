function sayName (){
    // console.log("Hello, my name is John");
    // console.log("Hello, my name is Rajan");
    // console.log("Hello, my name is Raj");
    // console.log("Hello, my name is Raja");
    // console.log("Hello, my name is Raa");
}
//sayName is reference and () is its execution.
sayName();


function addTwoNumbers(number1, number2){//number 1 and 2 are parameters
    let sum = number1 + number2;
    // console.log(sum);
    // return sum;
    return number1 + number2;
}
const result = addTwoNumbers(10, 20);//30 //the 20 and 30 are arguments
// addTwoNumbers(10, "20");//1020
// console.log(result);


function fullName(name = "sam"){//here sam is default value.
    if(name === undefined){
        console.log("Please enter name");
    }
    return `${name} just logged in`
}
// fullName("Rajan");
// console.log(fullName("Rajan"));


