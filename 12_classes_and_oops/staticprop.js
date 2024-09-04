class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const rajan = new User("rajan")
// rajan.createId();
// console.log(rajan.createId());


class Teacher extends User{
    
        constructor(username, email){
            super(username)
            this.email = email
    }
}

const iphone = new Teacher("iphone", "i@gmail.com")
iphone.logMe();
// console.log(iphone.createId());

