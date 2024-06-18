const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce
((accumulator, currentValue) => accumulator + currentValue, initialValue,
);

console.log(sumWithInitial);
// Expected output: 10

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function(acc, curval){
    console.log(`acc: ${acc} and curval: ${curval}`);
    return acc + curval
},0)//here, 0 is initial value for accumulator
console.log(myTotal);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const arr = [0,1,2,3,4,5,6,7,8,9]
const newArr = arr.reduce((acc, currval) => acc + currval, 0)
console.log(newArr); //45

//>>>>>>>>>>>>>to add all the price in shopping cart>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>....
const shoppingCart = [
    {
        itemName: "js course",
        price: 100
    },
    {
        itemName: "java course",
        price: 1000
    },
    {
        itemName: "react course",
        price: 777
    },
    {
        itemName: "c++ course",
        price: 1250
    },
]

const totalPriceToPay = shoppingCart.reduce((acc, item) => {
    return acc + item.price
},0)
console.log(`you have to pay: Rs ${totalPriceToPay}`);
