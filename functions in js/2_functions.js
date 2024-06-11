function calculateCartPrice1(num1){
    return num1;
}
console.log(calculateCartPrice1(200,400,600));

///////////////////VS/////////////////////////
function calculateCartPrice2(...num2){  //here triple dot is rest and spread operator.
    return num2;
}
console.log(calculateCartPrice2(200,400,600));
///////////////////VS/////////////////////////
function calculateCartPrice3(val1, val2, ...num2){  //yaha val1 and val2 maa 200 ra 400 aayo baaki aaru rest and spread operator ley baaki bacheko data rest gayo output array maa.
    return num2;
}
console.log(calculateCartPrice3(200,400,600));







//object ko function maa kasari pass garni ra kasari use garni................
const user = {
    userName: "Rajan",
    price: "555"
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`);
}
// handleObject(user);
//OR//
handleObject({
    userName: "Rajan",
    price: "555"
});






///and how to pass array in function////////////
const myNewArray = [200,400,600,800];

function returnSecondValue(getArray){
    return getArray[3];
}
// console.log(returnSecondValue(myNewArray));
// ........................OR ..................
console.log(returnSecondValue([200, 400, 600, 800]));