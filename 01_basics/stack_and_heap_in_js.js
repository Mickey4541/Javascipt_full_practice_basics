/*
There are two types of memory : Stack and Heap.
Stack is used in Primitive and HEap is used in Non-primitive.
Whenever we use stack, we get the copy of declared variable.
Whenever we use heap memory, we get reference of original value means whatever the changes made is seen in the original value.

*/
//stack
let myName = "RajanBhandari"

let anotherName = myName
anotherName = "KeshavBhandari"
console.log(myName) //RajanBhandari
console.log(anotherName)//KeshavBhandari


//heap
let userOne = {
    email : "rajan@google.com",
    upi : "user@upi"
}

let userTwo = userOne
userTwo.email = "hitesh@google.com"

console.log(userOne.email)
console.log(userTwo.email)
