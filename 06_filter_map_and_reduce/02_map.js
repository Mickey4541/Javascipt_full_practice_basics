const myNumbers = [1,2,3,4,5,6,7,8,9]
//map is also a callback function
const newNumbers = myNumbers.map((num) => {
    return num + 10
})
console.log(newNumbers);

//>>>>>>>>>>>>>map chaining>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const heroes = ['nikhil', 'rajesh', "biraj", 'ramit', "aryan"]
const newHeroes = heroes.map((hero) => {
    return hero + 10 ;
}).map((hero) => {
    return hero + 1;
})
console.log(newHeroes);

//>>>>>>>>>>>>>>>>>>>>>map and filter chaining>>>>>>>>>>
//>>>2 patak map ra ek patak filter chaining gareko ho yaha
const myNum = [1,2,3,4,5,6,7,8,9]
const newNum = myNum.map((num) => {
    return num + 10 ;
}).map((num) => {
    return num + 1;
}).filter((num) => {
    return num >= 18
})
console.log(newNum);
