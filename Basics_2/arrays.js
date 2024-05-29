//it is a Object, enables storing a collection of multiple items 
// under a single variable name

const myArr = [0,1,2,3,4,5,"Rajan", true];//baisc array

// console.log(myArr[1]); //accessing array element using index.

// const myHeroes = ['Shaktiman', "rajan"];

// const myArrays = new Array(0, 1, 2, 3, 4);
// console.log(myArr[4]);

//Array Methods

// myArr.push(5)
// myArr.push(6)
// myArr.pop(); //removes last index
// console.log(myArr)
// myArr.unshift(5);
// myArr.shift(5);
// console.log(myArr);
// console.log(myArr.includes(9));//false
// console.log(myArr.indexOf(0));//5


// const newMyArray = myArr.join()
// console.log(newMyArray);//1,2,3,4,5,Rajan,true----here join converts the array into string.


// =============slice and splice=====================
console.log("A", myArr);//A [ 0, 1, 2, 3, 4, 5, 'Rajan', true ]

const myn1 = myArr.slice(1,3);//3 include hudaina slice maa

console.log(myn1);//[ 1, 2 ]

console.log(myArr);//Original array is not modified. [ 0, 1, 2, 3, 4, 5, 'Rajan', true ]


console.log("B", myArr);//B [ 0, 1, 2, 3, 4, 5, 'Rajan', true ]


const myn2 = myArr.splice(1,3);
console.log(myn2);//[ 1, 2, 3 ]
console.log(myArr);//orignal array is modified in splice.[ 0, 4, 5, 'Rajan', true ]

/**
 slice Method======================================
Purpose: Creates a new array by extracting a section of an existing array.
Syntax: array.slice(start, end)
Returns: A new array with the extracted elements.
Original Array: Remains unchanged.
splice Method======================================
Purpose: Adds or removes elements, modifying the original array.
Syntax: array.splice(start, deleteCount, item1, item2, ...)
Returns: An array of the removed elements.
Original Array: Is modified.
 */