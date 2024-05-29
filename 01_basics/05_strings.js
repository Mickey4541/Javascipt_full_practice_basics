const name = "Rajan"
const repoCount = "5"

//console.log(name + repoCount)-----//old method
//console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`)//This is new method with backticks called string interpolation.(``).

//declaring string in other way
//try this code in web console and explore
/*
const gameName = new String('rajan'); using new is using objects in js.
console.log(gameName[0]);//output = R
console.log(gameName.__proto__);//output = String {'', constructor: ƒ, anchor: ƒ, at: ƒ, big: ƒ, …}


console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));//to see character position
console.log(gameName.indexOf('B')); //to see index of character

const newString = gameName.substring(0, 4) //slicing
console.log(newString);//output = Raja(last value is not included i.e: 4 index)
*/
const gameName = 'RajanBhandari'
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);
//to trim the whitespace. trim also includes trimend and trimstart.
const newStringOne = "     rajan  "
console.log(newStringOne);
console.log(newStringOne.trim());/**spaces xa ni rajan maa. teslai tim garako legi
 */

//to replace the 20% with underscore.
const url = "https://rajan.com/rajan20%Bhandari"
console.log(url.replace('20%', '_'))
 //to search if the url consist rajan or not.
console.log(url.includes('rajan'))/** */



const demo = "Javascript-is-awesome"
console.log(demo.split('-')) //output = [ 'Javascript', 'is', 'awesome' ]


//reference = string search in google mdn documentation.

