// const coding = ['js', 'ruby', 'python', 'java', 'c++']

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item
// })
// console.log(values);
//here, from this example, we know that 
//for each doesn't return any value.

//>>>>>>>>>>>>>>>>>>>filter>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9,]

// const newNums = myNums.filter((num) =>   num > 4 ) //here we have not used any scope{}, so there is no need to use the return.
// console.log(newNums);//output:[ 5, 6, 7, 8, 9 ]


//OR//

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9,]

const newNums = myNums.filter( (num) => {
    return num > 4 //if we use scope{} in this call back function, we have to use return to return something.
})
console.log(newNums);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//but to do the same example, and i dont want to use filer just like
//Above , and i want to use foreach:::
const anotherNewNums = []
myNums.forEach((num) => {
    if (num > 4) {
        anotherNewNums.push(num)
        }
})
console.log(anotherNewNums);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
    ];

    const userBooks = books.filter((bk) => {
        return bk.genre === 'History';
    })
    // console.log(userBooks);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*boolean operands will be true if and only if all the operands are true. Otherwise it will be false. */
    const publishDate = books.filter((bk) => {
        return bk.publish >= 1995 && bk.genre === 'History';
    })
    console.log(publishDate);