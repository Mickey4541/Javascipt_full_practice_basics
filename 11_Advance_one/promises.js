//fetch('https://example.com').then().catch().finallly()

const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function () {
        console.log("Async task is complete");
        resolve()// connecting resolve and .then
    }, 1000)
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
    setTimeout(function () {
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved");
})

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//passing data coming from any network
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Mickey4541", email: "mickey@gmail.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user)
})


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        //let error = true
        let error = false
        if (!error) {
            resolve({ username: "Rajan", password: "123" })
        } else {
            reject('Error:: Something went wrong');
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;
})
    .then((username) => {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log('Promise is either resolved or rejected finally.');
    })


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "Rajan", password: "234" })
        } else {
            reject("ERROR: Something went wrong")
        }
    }, 1000)
});

//we can do promises not only .then and .catch ....we
//can do it by async await. Both are same.
//In async await we cannot gracefully handle error.
//To catch the error in async await, we use try and catch block.
async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json() //json maa convert huna pani time lagxa.
//         console.log(data);
//     } catch (error) {
//         console.log("Error:", error);
//     }

// }
// getAllUsers()


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//what if i have to write this above async await function in .then and .catch::::
//Here it is:::::::::
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => {
    console.log(error)
})