let myName = 'Rajan'
console.log(myName.length);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let myNames = 'Rajan     '
//console.log(myName.trim().length);

console.log(myNames.truelength);
//Here, truelength is not a property, it is method. we have to make.

//here we go::::(first kahani with array)

//.......................

let myHeros = ["thor", "spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "Sling",

    getSpiderPower: function(){
        console.log(`Spiderman power is ${this.spiderman}`);
        
    }
}
//adding property in object:
Object.prototype.rajan= function(){
    console.log(`rajan is present in all objects.`)
}

Array.prototype.heyRajan = function(){
    console.log(`Rajan Says Hello`);
    
}
//heroPower.rajan()
myHeros.rajan();
myHeros.heyRajan();
//heroPower.heyRajan();


//INHERITANCE>>>>>>>>>>>>>>>>>....
//>>>prototypal inheritance older syntax>>>>>>>>>>>>>>>
const User = {
    name: "chai",
    email: "chai@google.com"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'Js Assignment',
    fullTime: true,
    __proto__:TeachingSupport//Tasupport ley teaching support ko sabai properties access garna sakxa.

}

Teacher.__proto__ = User //Teacher pani user ko sabai properties access garna sakxa.

//>>>>>>>>>>>>>>>modern syntax>>>>>>>>>>>>>>>>>>>>>>
Object.setPrototypeOf(TeachingSupport, Teacher)//Teachingsupport has access of Teacher



let anotherUSerName = "RajanBhandari     "
String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
    
}
anotherUSerName.truelength()
"Rajan".truelength()
"Chiya".truelength()