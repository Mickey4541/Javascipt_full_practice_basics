//ES6

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUSername(){
        return `${this.username.toUpperCase()}`
    }
}
const coffee = new User("coffeee", "coffee@gmail.com", "123")
console.log(coffee.encryptPassword());
console.log(coffee.changeUSername());


//behind the scene
class anotherUser {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword() {
        return `${this.password}abc`;
    }
    changeUsername() {
        return `${this.username.toUpperCase()}`;
    }
}


const tea = new anotherUser("tea", "coffee@gmail.com", "123")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());