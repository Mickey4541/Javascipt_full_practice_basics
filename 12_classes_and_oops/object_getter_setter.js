const User = {
    _email: 'rajan@gmail.com',
    _username: 'Rajan',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);
