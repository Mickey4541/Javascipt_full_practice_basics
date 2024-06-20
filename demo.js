let intitalValue = 0
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function myFunction(item){
    let rajan = item.reduce((acc, curval) => {
        return acc + curval
    },0)
    console.log(rajan);

}

myFunction(myArray);

// defines an array myArray and a function myFunction that takes an array as an argument and calculates the sum of its elements using the reduce method. 