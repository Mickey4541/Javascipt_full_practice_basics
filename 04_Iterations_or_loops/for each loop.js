//for each loop >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const coding = ["Javasccript", "C++", "java", "Python", "Ruby", "Swift"];
coding.forEach( function (item){ //This is callback function. This function doesn't have function name.
    // console.log(item);
})
    //OR//
coding.forEach((item) => {
    // console.log(item);
})

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function printMe(item){
    console.log(item);
}
// coding.forEach(printMe);

//OR///

coding.forEach(function (item){
    console.log(item);
});
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// for each doesn't have only items as parameter,
// it has other values like index and arraylist. Like:

coding.forEach(function (item, index, array){
    console.log(`Item: ${item}, Index: ${index}, Array: ${array}`);
    });

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const myCoding = [
    {
        languageName: 'javascript',
        languageFile: 'Js',
    },
    {
        languageName: 'Python',
        languageFile: 'Py',
    },
    {
        languageName: 'ruby',
        languageFile: 'rb',
    },
]
myCoding.forEach((item) => {
    // console.log(item);
    console.log(item.languageName);
})