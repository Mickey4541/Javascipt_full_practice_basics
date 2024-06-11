// const tinderUSer = new Object()   this is singleton object
const tinderUSer = {} // This is non-Singleton object


tinderUSer.id = "123abc";
tinderUSer.name = "shyam";
tinderUSer.isLoggedIn = false;
// console.log(tinderUSer);


const regularUSer = {
    email: "some@gmail.com",
    fullname:{
        userFullName: "Rajan Bhandari",
        firstName: "Rajan",
        lastname: "Bhandari"
    }
}
// console.log(regularUSer.fullname);



const obj1  = {
    1: "a",
    2: "b",
    3: "c"
}
const obj2  = {
    4: "d",
    5: "e",
    6: "f"
}
// const obj3 = Object.assign(obj1, obj2); //yo ra--------jo garepani
const obj3 = Object.assign({}, obj1, obj2);//yo maa----hunchha. yaha () optional hunxa
// console.log(obj3);
// const obj3 = {obj1, obj2}
// console.log(obj3);


const onj3 = {...obj1, ...obj2}
console.log(obj3);


//how values comes from database
//array bhitra object
const users = [
    {
        id: 1,
        email: "rajan@gmail.com",
    },
    {
        roll_no: 12,
        gmail: "rajan@gmail.com",
    },
]

users[1].email;
console.log(tinderUSer);

console.log(Object.keys(tinderUSer));
console.log(Object.values(tinderUSer));
console.log(Object.entries(tinderUSer));

console.log(tinderUSer.hasOwnProperty('isLoggedIn'));