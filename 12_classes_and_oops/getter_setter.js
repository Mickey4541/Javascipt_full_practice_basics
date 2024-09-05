// class User{
//     constructor(email, password){
//         this.email = email;
//         this.password = password
//     }
// }

// const rajan = new User("rajan@gmail.com", "123")
// console.log(rajan.password);


//Here, we get password 123. but sometimes we need fine grain control.
//means, if someone ask me password , i would like to return encrypted password or
//i dont want ot tell password, There are many cases where you made a 
//class and you have some properties inside that class, you dont want to 
//share password or if you have to give , we need to customize the code,
//In such type of scenerio, we have getter and setter.




//here we set the password as abcdefghij in database which is actual 
//password and if anyone get the password, he get the password in uppercase.
class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    //getter
    get email(){
        return this._email.toUpperCase();
    }
    //setter
    set email(value){
        this._email = value
    }




    //getter
    get password(){
        return this._password.toUpperCase();
    }
    //setter
    set password(value){
        this._password = value
    }

}

const rajan = new User("rajan@gmail.com", "abcdefghij")
console.log(rajan.password);//ABCDEFGHIJ
console.log(rajan.email);//RAJAN@GMAIL.COM