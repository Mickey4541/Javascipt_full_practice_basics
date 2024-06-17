// >>>>>>>>>for loop>>>>>>>>>>>>>>>
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
    //console.log("5 is best number");
}
//console.log(element);
//    1
//     2
//     3
//     4
//     5
//     6
//     7
//     8
//     9
}
// console.log(element);//not accessible
// >>>>>>>>>>>>>>>>>>>>>>>>>>>printing a table >>>>>>>>>>>>>>>>>>>>>>>.>>>>>>>>>>
// for (let i = 1; i <= 10; i++) {
//     console.log(`The table of : ${i}`);
//         for (let j = 1; j <= 10; j++) {
//             //console.log(`Inner loop value: ${j} and outer loop is: ${i}`);
//             console.log(i + "*" + j + "=" +  i*j);
//         }
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>playing with array>>>>>>>>>>>>>>>>>>>>>>>>>.>>>>>>>>>>

let myArray = ["flash", "Spiderman", "Thor", "Hulk", "Ironman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

// >>>>>>>>>>>>>>>>>>>>>>>>>Keywords>>>>>>>>>>>>>>>>>>>>>>>>>.>>>>>>>>>>
//break and continue:::
//>>>>>>>>>>>>>>>>>>>>>>>>>>break>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log(`detected 5`);
//         break;
//     }
//     console.log(`Value of i is ${index}`);    
// }
//>>>>>>>>>>>>>>>>>>>>>>>>>>>continue>>>>>>>>>>>>>>>>>>>>>>>>>>>
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        // console.log(`detected 5`);
        continue;//skips 5 only and print all.
    }
    console.log(`Value of i is ${index}`);    
}
