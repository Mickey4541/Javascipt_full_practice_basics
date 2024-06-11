//"this keyword" tells about the current context.

const userObject = {
    username: "Rajan",
    price: 999,
    welcomeMessage: function(){
        // console.log("Welcome to the website " + this.username);
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
// userObject.welcomeMessage();
// //aaba yaha aayera username context change vayo ra name fariyo.
// userObject.username = "Shyam"; 
// userObject.welcomeMessage();

console.log(this);

// >>>>>>>>>>>>>>important>>>>>>>>>>>>>>>>>>>>>>>>:
// if we run this in any node environment and not in console of any
// browser then it will give empty object as output.
// and if we run this in console, then it will give window 
// object as output.
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//in this case , this doesn't work inside the function.
// function chai(){
//     let username = "Rajan";
//     console.log(this.username);
// }
// chai();



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const chai = () => {
    let username = "Rajan";
    console.log(this);
}
chai();

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//explicit return method:::::
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(5, 6));

//implicit return method:::::
const addtwos = (num1, num2) => (num1 + num2)
console.log(addtwos(5, 6));

//to implicitly return a object
// const addThree = (num1, num2) => {num1, num2};  wrong because we have to use small bracket to return objects
const addThree = (num1, num2) => ({num1, num2});




