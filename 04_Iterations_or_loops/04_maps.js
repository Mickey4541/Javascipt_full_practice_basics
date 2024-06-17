//>>>>>>>>>>>>>>>>>Maps>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
const map = new Map()
map.set('IN', 'India');
map.set('NP', 'Nepal');
map.set('USA', 'United States of America');
map.set('Fr', 'France');
// console.log(map);


for(const key of map){
    console.log(key);
}


for(const [key, value] of map){
    console.log(key, ':-', value);
}


// const myObject = {
//     'Game1': 'Football',
//     'Game2': 'Cricket',
//     'Game3': 'Tennis'
// }
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.