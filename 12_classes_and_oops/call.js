function SetUserName(username){
    this.username = username
    console.log("called");
    
}
function createUser(username, email, password){
    SetUserName.call(this, username)


    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@gmail.com", "123")
console.log(chai);
