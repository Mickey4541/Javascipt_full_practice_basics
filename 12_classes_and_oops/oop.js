//object literals
const user = {
    username: "Rajan",
    loginCount: 8,
    signedIn: true,

    getUSerDetails: function(){
        //console.log("Got user details from database");
        //console.log(`Username: ${this.username}`)
        console.log(this);
        
        //this keyword tells the current context.
    }
}
console.log(user.username);
console.log(user.getUSerDetails());
//if i print this keyword in global context it gives empty object:
console.log(this);//OTUPUT:::{}

//>>>>>>>>>>>>>>>>>>>>CONSTRUCTOR FUNCTION>>>>>>>>>>>>>>>>>>>>>>>>>
//new keyword is actually a constructor function.
//we can create multiple instances from only one onject literals using constructor function.
// const promiseOne = new Promise()
// const date = new Date()




function User(username, loginCount, isLoggedIn){
    this.username = username
    //myusername = username

    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome: ${this.username}`);
        
    }
    return this
}
//using new keyword
//here, we didn't print userTwo but userTwo override userOne.
//To Solve this, we use new keyword.

// const userOne = User("Rajan",10, true )
// const userTwo = User("Bhandari", 10, false)
// console.log(userOne);

const userOne = new User("Rajan",10, true )
const userTwo = new User("Bhandari", 10, false)
console.log(userOne);
console.log(userOne.constructor);
console.log(userTwo);

//read instanceof in js from mdn.