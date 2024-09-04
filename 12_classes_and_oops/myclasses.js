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
}
const coffee = new User("coffeee", "coffee@gmail.com", "123")
console.log(coffee.encryptPassword());
