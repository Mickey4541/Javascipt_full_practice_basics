//>>>>>>>>>>>>>>>>>for in loop in objects>>>>>>>>>>>>>>>>
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    //${myObject[key]}: This part accesses the value associated with the current key in myObject.
    console.log(`${key} shortcut is for ${myObject[key]}`);
    }

//>>>>>>>>>>>>>>>>>for in loop in array>>>>>>>>>>>>>>>>

const programming = ["js", "rb", "python", "C++", "Java"];
for (const key in programming) {
    console.log(key);
    console.log(programming[key]);
    
}
//>>>>>>>>>>>>>>>>>for in loop in map>>>>>>>>>>>>>>>>
//map is not iteratable..so can't use loop in map.
const map = new Map()
map.set('IN', 'India');
map.set('NP', 'Nepal');
map.set('USA', 'United States of America');
map.set('Fr', 'France');

for (const key in map) {
    console.log(key);

}

//Note::
/*
1. array maa for of loop lagauni
2.Objects maa for in loop lagauni
3. yei loop matra hudaina aru ni lagauna sakinchha.

 */
