const marvel_heroes = ["thor", "Ironman", "Spiderman"];
const DC_heroes = ["Superman", "Flash", "Batman"];

// marvel_heroes.push(DC_heroes);

// /**This is not recommended to do this but we can use it. */
// console.log(mavel_heroes);//Output : [ 'thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]
// console.log(mavel_heroes[3][1]);//Output :flash


// const allHeroes = marvel_heroes.concat(DC_heroes);
// console.log(allHeroes);
//Output : [ 'thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]


// ===========spread Operator=========================


/*Here ... is a spread operator.Think like a glass you throw and it broke and its
pieces are spread all over the ground*/
const all_New_Heroes = [...marvel_heroes, ...DC_heroes];
console.log(all_New_Heroes);
//[ 'thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]



const another_Array = [1, 2, 3, 4, ["Rajan", "Raja", "Raj", "Ra", "R",[0.1, 0.2, 0.3, 0.4] ]];

const real_Array = another_Array.flat(Infinity);//infinity ko thau maa depth dini ho jati arrays xan aauta array bhitra tei aanusar dida hunxa...
console.log(real_Array);


// ===========when doing data scrapping or something like that=========================

console.log((Array.isArray("Rajan")));//false
console.log((Array.from("Rajan")));//[ 'R', 'a', 'j', 'a', 'n' ]


//Intresting must understand.....
console.log(Array.from({name: "rajan"}));//[] it gives empty array because it cannot directly convert that given name string.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2,score3));//[ 100, 200, 300 ]
