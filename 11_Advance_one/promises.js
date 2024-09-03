//fetch('https://example.com').then().catch().finallly()

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()// connecting resolve and .then
    },1000)
})

//consuming promises

//IMPORTANT  :::: here,, .then has connection with resolve.
promiseOne.then(function () {
    console.log("Promise consumed.");
    
})


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


promiseOne.then(function (resolve, reject) {
    console.log("Promise consumed");
})
new Promise(function (resolve, reject) {
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//passing data coming from any network
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Mickey4541", email: "mickey@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Rajan", password: "123"})
        }else{
            reject('Error:: Something went wrong');
        }
    },1000)
})

